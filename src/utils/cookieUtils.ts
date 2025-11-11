/**
 * Cookie 工具函数
 * 用于跨子域 Cookie 的读写操作
 */

/**
 * 设置 Cookie
 * @param name Cookie 名称
 * @param value Cookie 值
 * @param options Cookie 配置选项
 */
export function setCookie(
  name: string,
  value: string,
  options: {
    domain?: string;
    path?: string;
    expires?: Date;
    maxAge?: number;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
  } = {}
): void {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  // 设置域名（用于跨子域共享）
  if (options.domain) {
    cookieString += `; domain=${options.domain}`;
  }

  // 设置路径
  cookieString += `; path=${options.path || '/'}`;

  // 设置过期时间
  if (options.expires) {
    cookieString += `; expires=${options.expires.toUTCString()}`;
  }

  // 设置 max-age（优先级高于 expires）
  if (options.maxAge !== undefined) {
    cookieString += `; max-age=${options.maxAge}`;
  }

  // 设置 secure 标志（HTTPS）
  if (options.secure) {
    cookieString += '; secure';
  }

  // 设置 SameSite 属性
  if (options.sameSite) {
    cookieString += `; samesite=${options.sameSite}`;
  }

  document.cookie = cookieString;
}

/**
 * 获取 Cookie 值
 * @param name Cookie 名称
 * @returns Cookie 值，不存在则返回 null
 */
export function getCookie(name: string): string | null {
  const cookies = parseCookieString(document.cookie);
  return cookies[name] || null;
}

/**
 * 解析 Cookie 字符串为对象
 * @param cookieString Cookie 字符串
 * @returns Cookie 键值对对象
 */
export function parseCookieString(cookieString: string): Record<string, string> {
  const cookies: Record<string, string> = {};

  if (!cookieString) {
    return cookies;
  }

  cookieString.split(';').forEach((cookie) => {
    const parts = cookie.split('=');
    const name = decodeURIComponent(parts[0].trim());
    const value = parts[1] ? decodeURIComponent(parts[1].trim()) : '';
    cookies[name] = value;
  });

  return cookies;
}

/**
 * 删除 Cookie
 * @param name Cookie 名称
 * @param options Cookie 配置选项（需要与设置时相同的 domain 和 path）
 */
export function deleteCookie(
  name: string,
  options: {
    domain?: string;
    path?: string;
  } = {}
): void {
  setCookie(name, '', {
    ...options,
    maxAge: -1, // 设置为负数立即删除
  });
}

