function log(req, res, next) {
    // Required fields
    const method = req.method
    const url = req.url
    const timestamp = (new Date()).toLocaleTimeString()
    const date = (new Date()).toLocaleDateString()
    const ip = req.ip

    console.log(`${method} ${url}  [${date} at ${timestamp}] from: [${ip}]`)
    next()
}

module.exports = log