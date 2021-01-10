/**
 * 是否是开发环境
 */
export function isDebug () {
  return process.env.NODE_ENV === 'development'
}
