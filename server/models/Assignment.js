import Sequelize from 'sequelize';
import db from '../db/db.js';

const Assignment = db.define('assignments',
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
    weight: {
      type: Sequelize.DECIMAL(5, 2), // 5 is max digits, e.g. 999.99, 2 is # dec places
      field: 'weight',
    },
    dueDate: {
      type: Sequelize.DATE,
      field: 'duedate',
    },
  },
  {
    freezeTableName: true, // Model tableName will be the same as the model name
  }
);

export default Assignment;
