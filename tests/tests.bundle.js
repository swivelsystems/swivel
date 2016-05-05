// Make sure you have your directory and regex test set correctly!
let context = require.context('./server', true, /.tests\.js$/);
context.keys().forEach(context);

context = require.context('./client', true, /.tests\.js$/);
context.keys().forEach(context);

