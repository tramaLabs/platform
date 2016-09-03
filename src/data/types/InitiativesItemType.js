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
  GraphQLNonNull as NonNull,
  GraphQLList as ListType,
} from 'graphql';
import UserType from './UserType';

const InitiativesItemType = new ObjectType({
  name: 'InitiativesItem',
  fields: {
    title: { type: new NonNull(StringType) },
    author: { type: UserType },
    slug: { type: new NonNull(StringType) },
    picture: { type: new NonNull(StringType) },
    resources: { type: new ListType(StringType) },
    interests: { type: new ListType(StringType) },
    publishedDate: { type: new NonNull(StringType) },
    description: { type: StringType },
  },
});

export default InitiativesItemType;
