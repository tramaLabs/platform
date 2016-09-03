/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import history from '../../core/history';
import s from './Button.css';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Button extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
  };

  render() {
    const { to, ...props } = this.props; // eslint-disable-line no-use-before-define
    return  (
      <button
        className={className}
        type={props.type}>
              {props.text}
      </button>
    );
  }

}

export default Button;
