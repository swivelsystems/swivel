import db from 'db';
// TODO: import all models here

module.exports = function initBackend() {

  // TODO: connect all models and specify relationships

  // EXAMPLES -----------------------------------------
  // Place.belongsToMany(User, {through: 'UserPlace'});
  // User.belongsToMany(Place, {through: 'UserPlace'});

  // [modelName].sync(); //use {force: true} option to drop existing tables
  db.sync(); // Using this instead of syncing separately creates the join tables
};
