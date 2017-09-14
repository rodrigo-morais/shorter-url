const hub = require('hub');

const findAll = () => hub.db.get('urls') || []

const create = (url) => hub.db.set('urls', [...findAll(), url])

module.exports = { findAll, create }
