/**
 * Google Ads 追踪参数类型定义
 */

/**
 * 追踪参数接口
 * 包含 Google Ads 和 UTM 参数
 */
export interface TrackingParams {
  /** Google Ads 点击 ID */
  gclid?: string;
  
  /** Facebook 点击 ID */
  fbclid?: string;
  
  /** UTM 流量来源 (例如: google, facebook) */
  utm_source?: string;
  
  /** UTM 媒介 (例如: cpc, email, social) */
  utm_medium?: string;
  
  /** UTM 活动名称 */
  utm_campaign?: string;
  
  /** UTM 内容标识 (用于区分同一活动的不同广告) */
  utm_content?: string;
  
  /** UTM 关键词 (付费搜索关键词) */
  utm_term?: string;
  
  /** 当前页面的来源（referrer） */
  referrer?: string;
  
  /** 当前访问的完整 URL（落地页） */
  landing_page?: string;
  
  /** 本次访问的唯一会话 ID */
  session_id?: string;
  
  /** 追踪参数保存时间戳 */
  timestamp?: string;
}

