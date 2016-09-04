/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLID as ID,
  GraphQLNonNull as NonNull,
} from 'graphql';

const InitiativesType = new ObjectType({
  name: 'Initiative',
  fields: {
    id: { type: new NonNull(ID) },
    name: { type: StringType },
    picture: { type: StringType },
    location: { type: StringType },
    website: { type: StringType },
  },
});

export default InitiativesType;
