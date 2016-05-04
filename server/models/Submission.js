import Sequelize from 'sequelize';
import db from '../db/db.js';

const Submission = db.define('submission',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    studentId: {
      type: Sequelize.INTEGER,
    },
    assignmentId: {
      type: Sequelize.INTEGER,
    },
    score: {
      type: Sequelize.DECIMAL,
    },
    submissionDate: {
      type: Sequelize.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Submission;
