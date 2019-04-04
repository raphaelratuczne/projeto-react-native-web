import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { helpRequested } from '../../redux/actions/help-actions'
import { getHelpRequestsNumber } from '../../redux/reducers';
import HelpButtonContainer from './HelpButtonContainer';

class HelpButton extends React.Component {
  render() {
    return (
      <HelpButtonContainer { ...this.props }/>
    );
  }
}

// @ts-ignore
HelpButton.propTypes = {
  helpRequests: PropTypes.number.isRequired,
  helpRequested: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  helpRequests: getHelpRequestsNumber(store),
});

export default connect(mapStateToProps, { helpRequested })(HelpButton)
