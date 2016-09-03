import DataType from 'sequelize';
import Model from '../sequelize';

const UserProfile = Model.define('UserProfile', {

  userId: {
    type: DataType.UUID,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING(255),
    defaultValue: false,
  },

  surname: {
    type: DataType.STRING(255),
    defaultValue: false,
  },

  home: {
    type: DataType.GEOMETRY('POINT'),
    defaultValue: false,
  },

  picture: {
    type: DataType.STRING(255),
  },

  gender: {
    type: DataType.STRING(50),
  },

  location: {
    type: DataType.STRING(100),
  },

  website: {
    type: DataType.STRING(255),
  },
},
{
  indexes: [
    { fields: ['name', 'surname'] },
  ],
});

export default UserProfile;
