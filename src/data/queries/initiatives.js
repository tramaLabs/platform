/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import InitiativesItemType from '../types/InitiativesItemType';

// React.js Initiatives Feed (RSS)
const url = 'http://ajax.googleapis.com/ajax/services/feed/load' +
            '?v=1.0&num=10&q=https://reactjsnews.com/feed.xml';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const initiatives = {
  type: new List(InitiativesItemType),
  resolve() {
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.responseStatus === 200) {
            items = data.responseData.feed.entries;
          }

          return items;
        })
  },
};

export default initiatives;
