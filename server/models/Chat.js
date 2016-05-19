import Sequelize from 'sequelize';
import db from '../db/db.js';

const Chat = db.define('chats',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    authorId: {
      type: Sequelize.STRING,
    },
    timestamp: {
      type: Sequelize.STRING,
    },
    teacherId: {
      type: Sequelize.INTEGER,
    },
    StudentId: {
      type: Sequelize.INTEGER,
    },
    body: {
      type: Sequelize.STRING,
    }
  },
  {
    freezeTableName: true,
  }

);

export default Chat;