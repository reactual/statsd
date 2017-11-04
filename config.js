(function () {
    "use strict"

    const FLUSH_INTERVAL = process.env.FLUSH_INTERVAL || 60000
    const STACKDRIVER_API_KEY = process.env.STACKDRIVER_API_KEY

    if (!STACKDRIVER_API_KEY) {
      throw new Error('err - Missing STACKDRIVER_API_KEY ENV variable')
    }

    return {
      flushInterval: FLUSH_INTERVAL,
      backends: [ "stackdriver-statsd-backend" ],
      stackdriver: {
        apiKey: STACKDRIVER_API_KEY,
        source: "detect-gce",
        debug: "true"
      }
    }
})()
