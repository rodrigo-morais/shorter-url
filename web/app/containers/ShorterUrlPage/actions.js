import {
  REQUESTED_URLS,
  RECEIVED_URLS,
  FAILED_URLS,
  ADD_URL,
} from './constants';

export const requestUrls = () => ({
  type: REQUESTED_URLS,
});

export const receiveUrls = (urls) => ({
  type: RECEIVED_URLS,
  data: urls,
});

export const failUrls = () => ({
  type: FAILED_URLS,
});

export const addUrl = (url) => ({
  type: ADD_URL,
  data: url,
});
