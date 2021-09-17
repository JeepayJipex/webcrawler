# webcrawler
crawl a website and retrieve all urls in csv file


```bash
Usage: main [options]

Options:
  -V, --version                                      output the version number
  -d, --domain <domain>                              Website domain name to crawl
  -a, --directory <directory>                        Specify directory for data saving (default:
                                                     "C:\\Users\\jmariette\\Desktop\\webcrawler")
  -s, --save-data                                    Should save data (default: false)
  -c, --limit-for-connections <limitForConnections>  Max simultaneous connexions to use (default: "5")
  -l, --rate-limit <rateLimit>                       Rate limiting (in ms) (default: "0")
  -r, --limit-for-redirects <limitForRedirects>      Limit of redirections (default: "5")
  -t, --timeout <timeout>                            Timeout (default: "500")
  -h, --headers <headers...>                         Custom Headers to pass as param:value
  --help                                             display help for command
```
