/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

function Feedback() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <a
          className={s.link}
          href="/about"
        >The Team</a>
        <span className={s.spacer}>|</span>
        <a
          className={s.link}
          href="/contact"
        >Ask a question</a>
      </div>
    </div>
  );
}

export default withStyles(s)(Feedback);
