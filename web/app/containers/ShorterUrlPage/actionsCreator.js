import { requestUrls, receiveUrls, failUrls } from './actions'

const getUrls = () => (dispatch) => {
    dispatch(requestUrls())
    fetch('http://localhost:8888/')
      .then(res => res.json())
      .then((urls) =>
        dispatch(receiveUrls(urls))
      )
      .catch(() => {
        dispatch(failUrls())
      })
}

export { getUrls }
