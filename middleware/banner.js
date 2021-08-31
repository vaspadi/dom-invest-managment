export default ({ route, store }) => {
  if (route.name) {
    store.dispatch('banner/changeBannerBg', route.meta[0].bannerBg)
    store.dispatch('banner/changeBannerTitle', route.meta[0].bannerTitle || '')
  }
}
