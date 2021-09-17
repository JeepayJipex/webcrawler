const { program } = require('commander')

exports.parseCommandArguments = function parseCommandArguments (version = '0.0.1') {
  program.version(version)
  program.requiredOption('-d, --domain <domain>', 'Website domain name to crawl')
  program.option('-a, --directory <directory>', 'Specify directory for data saving', process.cwd())
  program.option('-s, --save-data', 'Should save data', false)
  program.option('-c, --limit-for-connections <limitForConnections>', 'Max simultaneous connexions to use', '5')
  program.option('-l, --rate-limit <rateLimit>', 'Rate limiting (in ms)', '0')
  program.option('-r, --limit-for-redirects <limitForRedirects>', 'Limit of redirections', '5')
  program.option('-t, --timeout <timeout>', 'Timeout', '500')
  program.option('-h, --headers <headers...>', 'Custom Headers to pass as param:value')
  program.parse()
  return { program, options: program.opts() }
}
