const express = require('express')
const router = express.Router()

const urlModel = require('./urlModel')
const urlConverter = require('../libs/urlConverter')

router.get('/', (req, res) => {
  const urls = urlModel.findAll()

  urls ?
    res.status(200).json(urls) :
    res.status(500).send('There was a problem finding the url.')
})

router.post('/', (req, res) => {
  urlConverter.convert(req.body.url)
    .then(shortUrl => {
      const newUrl = {
        complete: req.body.url,
        short: shortUrl
      }

      urlModel.create(newUrl) ?
        res.status(200).json(newUrl) :
        res.status(500).send('There was a problem create url.')
    })
    .catch(() =>
      res.status(500).send('There was a problem create url.')
    )
})

module.exports = router;
