// Make sure you have your directory and regex test set correctly!
const context = require.context('./tests', true, /.tests\.js$/);
context.keys().forEach(context);
module.exports = context;
