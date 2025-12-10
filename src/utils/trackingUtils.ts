/**
 * Google Ads 和 UTM 参数追踪工具
 * 自动检测 URL 参数并保存到跨域 Cookie
 */

import { TrackingParams } from '../types/tracking';
import { setCookie, getCookie } from './cookieUtils';

/** Cookie 名称 */
const TRACKING_COOKIE_NAME = 'edgenext_tracking';

/**
 * 动态获取 Cookie 域名（跨子域共享）
 * 根据当前域名自动提取主域名
 * 例如：www.edgenext.com -> .edgenext.com
 *      home.prxcdn.com -> .prxcdn.com
 * @returns Cookie 域名（带点号前缀）或 undefined（本地开发环境）
 */
function getCookieDomain(): string | undefined {
  const hostname = window.location.hostname;
  
  // 本地开发环境（localhost 或 IP 地址）不设置域名
  if (hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return undefined;
  }
  
  // 分割域名部分
  const parts = hostname.split('.');
  
  // 如果域名部分少于2个（异常情况），返回原域名
  if (parts.length < 2) {
    return hostname;
  }
  
  // 提取最后两部分作为主域名（例如：edgenext.com、prxcdn.com）
  const mainDomain = parts.slice(-2).join('.');
  
  // 返回带点号前缀的域名，用于跨子域共享
  return `.${mainDomain}`;
}

/** Cookie 域名（跨子域共享） */
const COOKIE_DOMAIN = getCookieDomain();

/** 需要追踪的 URL 参数列表 */
const TRACKING_PARAM_KEYS = [
  'gclid',        // Google Ads 点击 ID
  'fbclid',       // Facebook 点击 ID
  'utm_source',   // 流量来源
  'utm_medium',   // 媒介
  'utm_campaign', // 活动名称
  'utm_content',  // 内容标识
  'utm_term',     // 关键词
] as const;

/**
 * 生成 UUID v4 格式的唯一标识符
 * @returns UUID 字符串（格式: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx）
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * 从 URL 中提取追踪参数
 * @returns 追踪参数对象（始终包含基础信息）
 */
export function getTrackingParamsFromURL(): TrackingParams {
  // 获取当前 URL 的查询参数
  const urlParams = new URLSearchParams(window.location.search);
  
  const trackingParams: TrackingParams = {};
  let hasUrlParams = false;

  // 遍历所有需要追踪的参数
  TRACKING_PARAM_KEYS.forEach((key) => {
    const value = urlParams.get(key);
    if (value) {
      trackingParams[key] = value;
      hasUrlParams = true;
    }
  });

  // 无论是否有 URL 追踪参数，都添加基础追踪信息
  // 1. 当前页面的来源（referrer）
  trackingParams.referrer = document.referrer || '';
  
  // 2. 当前访问的完整 URL（落地页）
  trackingParams.landing_page = window.location.href;
  
  // 3. 本次访问的唯一会话 ID
  trackingParams.session_id = generateUUID();
  
  // 4. 添加时间戳
  trackingParams.timestamp = new Date().toISOString();

  // 5. 标记是否包含 URL 追踪参数（用于调试）
  trackingParams.has_url_params = hasUrlParams;

  return trackingParams;
}

/**
 * 将追踪参数保存到 Cookie
 * @param params 追踪参数对象
 */
export function saveTrackingToCookie(params: TrackingParams): void {
  try {
    // 将参数对象转换为 JSON 字符串
    const paramsJson = JSON.stringify(params);
    
    // 保存到 Cookie
    // 使用 session cookie（不设置 expires/maxAge），浏览器关闭后自动失效
    setCookie(TRACKING_COOKIE_NAME, paramsJson, {
      domain: COOKIE_DOMAIN,
      path: '/',
      sameSite: 'Lax', // 安全性设置，防止 CSRF 攻击
    });

    console.log('[Tracking] 追踪参数已保存:', params);
  } catch (error) {
    console.error('[Tracking] 保存追踪参数失败:', error);
  }
}

/**
 * 从 Cookie 中读取追踪参数
 * @returns 追踪参数对象，如果不存在或解析失败则返回 null
 */
export function getTrackingFromCookie(): TrackingParams | null {
  try {
    const cookieValue = getCookie(TRACKING_COOKIE_NAME);
    
    if (!cookieValue) {
      return null;
    }

    // 解析 JSON 字符串
    const params = JSON.parse(cookieValue) as TrackingParams;
    return params;
  } catch (error) {
    console.error('[Tracking] 读取追踪参数失败:', error);
    return null;
  }
}

/**
 * 检查 URL 中是否包含新的追踪参数（TRACKING_PARAM_KEYS 中的参数有值）
 * @returns 如果包含新的追踪参数则返回 true，否则返回 false
 */
function hasNewTrackingParamsInURL(): boolean {
  const urlParams = new URLSearchParams(window.location.search);
  
  // 检查是否有 TRACKING_PARAM_KEYS 中的参数且有值
  return TRACKING_PARAM_KEYS.some((key) => {
    const value = urlParams.get(key);
    return value !== null && value !== '';
  });
}

/**
 * 从 URL 中仅提取追踪参数（TRACKING_PARAM_KEYS），不包含基础信息
 * @returns 追踪参数对象（仅包含 TRACKING_PARAM_KEYS 中的参数）
 */
function getTrackingParamsFromURLOnly(): Partial<TrackingParams> {
  const urlParams = new URLSearchParams(window.location.search);
  const trackingParams: Partial<TrackingParams> = {};
  
  // 只提取 TRACKING_PARAM_KEYS 中的参数
  TRACKING_PARAM_KEYS.forEach((key) => {
    const value = urlParams.get(key);
    if (value) {
      trackingParams[key] = value;
    }
  });
  
  return trackingParams;
}

/**
 * 初始化追踪功能
 * 自动收集并保存追踪信息到 Cookie
 * 
 * 使用说明：
 * - 在应用入口调用此函数（例如 App.tsx 的 useEffect 中）
 * - 每次页面加载/路由变化时都会收集并保存追踪信息
 * - 无论是否包含 URL 追踪参数，都会保存基础信息（referrer、landing_page、session_id、timestamp）
 * - 如果 URL 包含追踪参数（gclid、utm_* 等），会一并保存
 * - 如果 Cookie 中已存在追踪信息：
 *   - 如果新的 URL 中包含追踪参数（TRACKING_PARAM_KEYS 中的参数有值），则用最新的替换当前 cookie 内容
 *   - 否则沿用第一次进来的内容，不会覆盖
 */
export function initTracking(): void {
  try {
    // 先检查 Cookie 中是否已存在追踪信息
    const existingTracking = getTrackingFromCookie();
    
    if (existingTracking) {
      // 检查 URL 中是否包含新的追踪参数
      if (hasNewTrackingParamsInURL()) {
        // 从 URL 中提取新的追踪参数
        const newTrackingParams = getTrackingParamsFromURLOnly();
        
        // 合并：保留第一次的 session_id，更新追踪参数和其他基础信息
        const updatedTracking: TrackingParams = {
          ...existingTracking,
          ...newTrackingParams, // 用新的追踪参数覆盖旧的
          referrer: document.referrer || '', // 更新 referrer
          landing_page: window.location.href, // 更新落地页
          timestamp: new Date().toISOString(), // 更新时间戳
          has_url_params: Object.keys(newTrackingParams).length > 0, // 更新标记
        };
        
        // 保存更新后的追踪信息
        saveTrackingToCookie(updatedTracking);
        console.log('[Tracking] 检测到新的 URL 追踪参数，已更新 Cookie:', updatedTracking);
      }
      // 如果没有新的追踪参数，沿用第一次进来的 Cookie 内容，不覆盖
      return;
    }

    // Cookie 中不存在，从 URL 中提取追踪参数（包含基础信息）
    const trackingParams = getTrackingParamsFromURL();

    // 保存到 Cookie
    saveTrackingToCookie(trackingParams);
    
    // 日志输出
    if (trackingParams.has_url_params) {
      console.log('[Tracking] 检测到 URL 追踪参数，已保存:', trackingParams);
    } else {
      console.log('[Tracking] 已保存基础追踪信息:', trackingParams);
    }
  } catch (error) {
    console.error('[Tracking] 初始化追踪失败:', error);
  }
}

