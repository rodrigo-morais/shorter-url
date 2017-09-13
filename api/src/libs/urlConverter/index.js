const Bitly = require('bitly');
const bitly = new Bitly('YOUR_TOKEN')

const convert = (url) =>
  bitly.shorten(url)
    .then(res => res.data.url)
    .catch(error => '')

module.exports = { convert }
