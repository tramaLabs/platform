/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from '../components/Home';
import fetch from '../core/fetch';

export default {

  path: '/',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{initiatives{id,name,picture,location,website}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (!data || !data.initiatives) throw new Error('Failed to load the initiatives feed.');
    return <Home initiatives={data.initiatives} />;
  },

};
