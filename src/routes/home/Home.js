/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

const title = 'React Starter Kit';

function Home({ initiatives, user }, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Near initiatives</h1>
        <a href="/initiative">Add your initiative</a>
        {"email: "}{user && user.email}
        <ul className={s.news}>
          {initiatives.map((item, index) => (
            <li key={index} className={s.newsItem}>
              <a href={item.link} className={s.newsTitle}>{item.title}</a>
              <span
                className={s.newsDesc}
                dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Home.propTypes = {
  initiatives: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default connect(({ user }) => ({ user }))(withStyles(s)(Home))
