import { connect } from 'react-redux';

import ShorterUrl from 'components/ShorterUrl';


const mapStateToProps = (state) => {
  const {
    data: urls,
    loading,
    error
  } = state.get('shorterUrl')

  return {
    urls,
    loading,
    error,
  }
}

export default connect(mapStateToProps)(ShorterUrl);

