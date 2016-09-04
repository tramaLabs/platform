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
import s from './Home.css';

import InitiativeCard from '../InitiativeCard';

const title = 'Trama';

function Home({ initiatives }, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Near initiatives</h1>
        <a href="/initiative">Add your initiative</a>
        <ul className={s.news}>
          {initiatives.map((item, index) => (
            <li key={index} className={s.newsItem}>
              <InitiativeCard initiative={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Home.propTypes = {
  initiatives: PropTypes.array.isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
