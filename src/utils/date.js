import dayjs from 'dayjs'

/**
 * 格式化时间戳
 * @param { number | string } timestamp 时间戳
 * @param { string } template 格式化格式
 */
export function formatTimestamp (timestamp, template = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(timestamp).format(template)
}
