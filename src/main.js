const { parseCommandArguments } = require('./command.js')
const { schema, validate } = require('./validator.js')
const chalk = require('chalk')
const { createCrawler } = require('./web-crawler.js')
const { subscribeCrawlerEvents } = require('./events.js')

async function execute () {
  try {
    const { options } = parseCommandArguments('0.0.1')
    const { value: validated } = validate(schema, options)
    const { crawler } = createCrawler(validated)

    crawler.crawl()
    subscribeCrawlerEvents(crawler, validated.domain, validated.directory, validated.saveData)
  } catch (e) {
    console.log(chalk.bgRed.white('Error : ' + e.message))
    console.log('\r\nProcess is about to exit now.')
    process.exit(1)
  }
}

execute()
