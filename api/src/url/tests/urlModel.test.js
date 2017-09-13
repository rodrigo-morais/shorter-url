const urlModel = require( '../urlModel')
jest.mock('hub')
describe('urlModel', () => {




  describe('when does not have urls',() => {
    const hub = require('hub');

    beforeEach(() => {
      hub.db = { get: jest.fn(key => []) }
    })

    it('should return an empty array', () => {
      const expected = []

      expect(urlModel.findAll()).toEqual(expected)
    })
  })

  describe('when has urls',() => {
    const hub = require('hub');
    const urls = [
      {
        url: 'http://www.google.com',
        shortUrl: 'http://goog.gl'
      }
    ]

    beforeEach(() => {
      hub.db = { get: jest.fn(key => urls) }
    })

    it('should return existent url', () => {
      expect(urlModel.findAll()).toEqual(urls)
    })
  })
})
