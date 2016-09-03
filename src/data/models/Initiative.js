import DataType from 'sequelize';
import Model from '../sequelize';

const Initiative = Model.define('Initiative', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING(300),
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
