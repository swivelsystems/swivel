import Sequelize from 'sequelize';
import db from '../db/db.js';

const Course = db.define('Course',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      field: 'name',
    },
    description: {
      type: Sequelize.STRING,
      field: 'description',
    },
    department: {
      type: Sequelize.STRING,
      field: 'department',
    },
  },
  {
    freezeTableName: true, // Model tableName will be the same as the model name
  }
);

module.exports = Course;
