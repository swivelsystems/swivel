import Sequelize from 'sequelize';
import db from '../db/db.js';

const Chat = db.define('chats',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    author: {
      type: Sequelize.STRING,
    },
    chatroom: {
      type: Sequelize.STRING,
    },
    timestamp: {
      type: Sequelize.STRING,
    },
    participant1: {
      type: Sequelize.INTEGER,
    },
    particapnt2: {
      type: Sequelize.INTEGER,
    },
    p1type: {
      type: Sequelize.STRING,
    },
    p2type: {
      type: Sequelize.STRING,
    }
    body: {
      type: Sequelize.STRING,
    }
  },
  {
    freezeTableName: true,
  }

);

export default Chat;