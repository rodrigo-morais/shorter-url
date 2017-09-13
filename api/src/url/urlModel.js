const hub = require('hub');

const findAll = () => hub.db.get('urls') || []

module.exports = { findAll }
