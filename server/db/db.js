import Sequelize from 'sequelize';
import password from '../config/mysqlsetup.js';

const db = new Sequelize('swivel', 'swivel', password, {
  host: 'swivelmysql.cxgkg3tcrt8h.us-west-2.rds.amazonaws.com',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

export default db;
