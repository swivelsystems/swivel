import Sequelize from 'sequelize';
import db from '../db/db.js';

const Course = db.define('courses',
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

export default Course;
