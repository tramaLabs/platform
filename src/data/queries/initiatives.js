/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import InitiativesItemType from '../types/InitiativesItemType';
import Initiative from '../models/Initiative';


function retornaEssaMerda() {
  return new Promise((resolve) => {
    Initiative.findAll().then((initiatives) => {
      resolve(initiatives);
    });
  });
}

const initiativesQuery = {
  type: new List(InitiativesItemType),
  resolve: retornaEssaMerda,
};

export default initiativesQuery;
