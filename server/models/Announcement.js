import Sequelize from 'sequelize';
import db from '../db/db.js';

const Announcement = db.define('Announcement',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      field: 'title',
    },
    body: {
      type: Sequelize.STRING,
      field: 'body',
    },
  },
  {
    freezeTableName: true, // Model tableName will be the same as the model name
  }
);

export default Announcement;
