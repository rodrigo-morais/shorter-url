const express = require('express')
const app = express()
const hub = require('hub')
const NodeCache = require('node-cache')

hub.db = new NodeCache()

module.exports = app
