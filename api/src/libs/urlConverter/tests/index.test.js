const urlConverter = require( '../index')

describe('urlConverter', () => {
  it('should return a shorter url', () => {
    const url = 'http://www.google.de'
    const shortUrl = 'http://bit.ly/2wZc2zO'

    expect.assertions(1)

    return urlConverter.convert(url)
      .then(newUrl => expect(newUrl).toBe(shortUrl));
  });
});
