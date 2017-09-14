import { connect } from 'react-redux';

import ShorterUrl from 'components/ShorterUrl';
import { postUrl } from './actionsCreator';

const mapStateToProps = (state) => {
  const {
    data: urls,
    loading,
    error,
  } = state.get('shorterUrl');

  return {
    urls,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  convertUrl: (url) =>
    dispatch(postUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShorterUrl);
