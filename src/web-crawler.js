const Crawler = require('node-html-crawler')

exports.createCrawler = function createCrawler (options) {
  const config = {
    protocol: 'https:',
    ...options,
    headers: {
      'User-Agent': 'Mozilla/5.0',
      ...parseCustomHeaders(options.headers)
    },
    urlFilter: (url) => true
  }

  const crawler = new Crawler(config)
  return { crawler, config }
}

function parseCustomHeaders (params) {
  if (!params) return {}
  const paramsObject = {}
  params.forEach(param => {
    param = param.split(':')
    paramsObject[param[0]] = param[1]
  })
  return paramsObject
}
