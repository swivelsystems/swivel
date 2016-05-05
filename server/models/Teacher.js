import Sequelize from 'sequelize';
import db from '../db/db.js';

const Teacher = db.define('teachers',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    department: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Teacher;
