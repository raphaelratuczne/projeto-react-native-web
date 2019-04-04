import React from 'react';

import AboutButtonView from './AboutButtonView';

export default class AbstractAboutButtonContainer extends React.Component<any,any> {

  constructor(props:any) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    throw new TypeError('Abstract method onClick is not implemented');
  }

  render() {
    return <AboutButtonView onClick={this.onClick}/>;
  }
}
