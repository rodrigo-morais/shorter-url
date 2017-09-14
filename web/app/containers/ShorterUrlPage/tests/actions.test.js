import {
    REQUESTED_URLS,
    RECEIVED_URLS,
    FAILED_URLS,
} from '../constants';
import {
  requestUrls,
  receiveUrls,
  failUrls,
} from '../actions';


describe('actions', () => {
  describe('requestUrls', () => {
    it('returns REQUESTED_URLS as type', () => {
      expect(requestUrls().type).toBe(REQUESTED_URLS);
    });
  });

  describe('receiveUrls', () => {
    const urls = 'ANY URLS';

    it('returns RECEIVED_URLS as type', () => {
      expect(receiveUrls(urls).type).toBe(RECEIVED_URLS);
    });

    it('returns informed URLs as data', () => {
      expect(receiveUrls(urls).data).toBe(urls);
    });
  });

  describe('failUrls', () => {
    it('returns FAILED_URLS as type', () => {
      expect(failUrls().type).toBe(FAILED_URLS);
    });
  });
});
