/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Initiative from '~components/Initiative';

export default {

  path: '/initiative/:initiativeId',

  async action(ctx, { initiativeId }) {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          {
            initiative(id: "${initiativeId}"){
              id,
              name,
              picture,
              location,
              website,
            }
          }
        `,
      }),
      credentials: 'include',
    });

    const { data } = await resp.json();
    if (!data || !data.initiative) throw new Error('Failed to load the initiative');
    return <Initiative initiative={data.initiative} />;
  },
};
