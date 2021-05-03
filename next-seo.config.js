const description =
  'Revenue Sharing for Creaotrs'
const title = 'DeFiNet'
const url = 'https://definet.dev'

const seo = {
  title,
  titleTemplate: '%s',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@net_defi',
    site: '@net_defi'
  }
}

export { seo as defaultSeo, url as defaultUrl }
