const express = require('express')
const app = express()
const hub = require('hub')
const NodeCache = require('node-cache')
const cors = require('cors')

app.use(cors())
app.set('json spaces', 40)

hub.db = new NodeCache()

const urlController = require('./src/url/urlController')
app.use(urlController)

module.exports = app
