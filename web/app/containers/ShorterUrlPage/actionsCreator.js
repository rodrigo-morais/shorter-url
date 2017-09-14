import { requestUrls, receiveUrls, failUrls, addUrl } from './actions';

const getUrls = () => (dispatch) => {
  dispatch(requestUrls());
  fetch('http://localhost:8888/')
    .then((res) => res.json())
    .then((urls) =>
      dispatch(receiveUrls(urls))
    )
    .catch(() => {
      dispatch(failUrls());
    });
};

const postUrl = (url) => (dispatch) => {
  fetch('http://localhost:8888/', {
    method: 'POST',
    body: url,
  })
    .then((res) => res.json())
    .then((newUrl) =>
      dispatch(addUrl(newUrl))
    );
};

export { getUrls, postUrl };
