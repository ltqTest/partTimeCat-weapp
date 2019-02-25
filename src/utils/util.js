import moment from 'moment'
import 'moment/locale/zh-cn'

/**
 * 将国际时间格式转为文字格式
 * @param date
 * @param format
 * @returns {string}
 */
const diffForHumans = (date, format = 'YYYYMMDD H:mm:ss') => {
  moment.locale('zh-cn')
  return moment(date, format).fromNow()
}

export default {
  diffForHumans
}
