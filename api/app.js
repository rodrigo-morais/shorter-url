const express = require('express')
const app = express()
const hub = require('hub')
const NodeCache = require('node-cache')

hub.db = new NodeCache()

const urlController = require('./src/url/urlController')
app.use(urlController)

module.exports = app
