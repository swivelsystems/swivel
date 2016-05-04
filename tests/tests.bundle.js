// Make sure you have your directory and regex test set correctly!
const context = require.context('./server', true, /.tests\.js$/);
context.keys().forEach(context);
