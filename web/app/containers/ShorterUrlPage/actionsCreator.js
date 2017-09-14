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
  const body = JSON.stringify({ url });

  fetch('http://localhost:8888/', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body,
  })
    .then((res) => res.json())
    .then((newUrl) =>
      dispatch(addUrl(newUrl))
    );
};

export { getUrls, postUrl };
