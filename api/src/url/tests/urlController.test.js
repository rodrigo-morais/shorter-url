const request = require('supertest')
const express = require('express')

jest.mock('../urlModel')

const urlController = require('../urlController')

const app = express()
app.use(urlController)

describe('urlController', () => {
  let urlModel = require('../urlModel');

  beforeEach(() => {

  })

  it('gets all urls', () => {
    urlModel.findAll = jest.fn(() => [])

    return request(app).get('/').then((res) => {
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual([])
    })
  })

  it('gets error', () => {
    urlModel.findAll = jest.fn(() => undefined)

    return request(app).get('/').then((res) => {
      expect(res.statusCode).toBe(500)
    })
  })
});
