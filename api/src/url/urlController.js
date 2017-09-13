const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const urlModel = require('./urlModel')

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  const urls = urlModel.findAll()

  urls ?
    res.status(200).send(urls) :
    res.status(500).send('There was a problem finding the users.')
})

module.exports = router;
