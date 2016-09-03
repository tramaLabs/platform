/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AddInitiative.css';
import Button from '../../components/Button/Button.js';

const title = 'New Initiative';

function AddInitiative(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <form method="post">
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="usernameOrEmail">
              Username or email address:
            </label>
            <input
              className={s.input}
              id="usernameOrEmail"
              type="text"
              name="usernameOrEmail"
              autoFocus
            />
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="password">
              Password:
            </label>
            <input
              className={s.input}
              id="password"
              type="password"
              name="password"
            />
          </div>
          <div className={s.formGroup}>
            <Button type="submit" text="Add"/>
          </div>
        </form>
      </div>
    </div>
  );
}

AddInitiative.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(AddInitiative);
