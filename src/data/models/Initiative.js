import DataType from 'sequelize';
import Model from '../sequelize';

const Initiative = Model.define('Initiative', {

  id: {
    type: DataType.UUID,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING(300),
    defaultValue: false,
  },

  home: {
    type: DataType.GEOMETRY('POINT'),
    defaultValue: false,
  },

  picture: {
    type: DataType.STRING(255),
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
    { fields: ['name'] },
  ],
});

export default Initiative;
