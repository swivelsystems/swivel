import Sequelize from 'sequelize';
import db from '../db/db.js';

const Submission = db.define('submissions',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    score: {
      type: Sequelize.DECIMAL,
    },
    submissionDate: {
      type: Sequelize.DATE,
      field: 'submissionDate',
    },
  },
  {
    freezeTableName: true,
  }
);

export default Submission;
