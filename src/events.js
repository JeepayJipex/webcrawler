const chalk = require('chalk')
const { writeFileSync } = require('fs')
const { join } = require('path')
const siteData = []

exports.subscribeCrawlerEvents = function subscribeCrawlerEvents (crawler, domain, directory, shouldSave = false) {
  crawler.on('data', handleData)
  crawler.on('error', handleError)
  crawler.on('end', () => {
    if (shouldSave) {
      saveData(domain, directory)
    }
    console.log(chalk.green('Domain successfully crawled'))
  })
}

function handleData (data) {
  console.log(data.result.requestMethod, chalk[data.result.statusCode < 400 ? 'green' : 'red'](data.result.statusCode), data.url)
  siteData.push({ url: data.url, status: data.result.statusCode, method: data.result.requestMethod })
}
function handleError (error) {
  console.error(chalk.red(error.message))
}
function saveData (domain, directory) {
  let data = ['method;url;status']
  data = [...data, ...siteData.map(line => [line.method, line.url, line.status].join(';'))].join('\r\n')
  const path = join(directory, domain + '.csv')
  writeFileSync(path, data)
  console.log(chalk.bgGreen.white(`result saved on file : ${path}`))
}
