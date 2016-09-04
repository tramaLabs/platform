/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLID } from 'graphql';
import InitiativesItemType from '../types/InitiativesItemType';
import Initiative from '../models/Initiative';


function retornaEssaMerda(source, args) {
  return new Promise((resolve) => {
    if (args.id) {
      Initiative.find({ id: args.id }).then((initiative) => {
        resolve(initiative);
      });
    }
  });
}

const initiativeQuery = {
  type: InitiativesItemType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: retornaEssaMerda,
};

export default initiativeQuery;
