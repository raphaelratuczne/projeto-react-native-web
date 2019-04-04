import React from 'react';
import PropTypes from 'prop-types';

import HelpButtonView from './HelpButtonView';

export default class AbstractHelpButtonContainer extends React.Component<any,any> {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.displayMessage(`You asked for help ${this.props.helpRequests + 1} time(s)`);
    this.props.helpRequested();
  }

  displayMessage(message) {
    throw new TypeError('Abstract method displayMessage is not implemented');
  }

  render() {
    return <HelpButtonView onClick={this.onClick}/>;
  }
}

// @ts-ignore
AbstractHelpButtonContainer.propTypes = {
  helpRequests: PropTypes.number.isRequired,
  helpRequested: PropTypes.func.isRequired,
};
