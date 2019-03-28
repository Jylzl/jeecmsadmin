// translate router.meta.title, be used in breadcrumb sidebar tagsview

export function generateTitle(item, title) {
  const hasKey = this.$te(item + '.' + title)
  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t(item + '.' + title)

    return translatedTitle
  }
  return title
}