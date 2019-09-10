/**
 * @description: 动态获取页面标题
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-05-14 11:46:02
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-10 08:51:29
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'jeecms'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
