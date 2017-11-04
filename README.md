StatsD
======

**Reactual** | Google Stackdriver [customized](https://github.com/Stackdriver/stackdriver-statsd-backend) StatsD

Forked from ([Etsy](https://www.etsy.com/)) [Statsd](https://github.com/etsy/statsd)

Environment variables to set:
```

  FLUSH_INTERVAL // optional, defaults to 60000 (ms), the lowest currently supported by Stackdriver as of 11/3/2017.
  STACKDRIVER_API_KEY // required, package will throw an error if not provided.

```
