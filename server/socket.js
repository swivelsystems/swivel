import socketio from 'socket.io';

var clients = {};

export const socketServer = function(app, server) {
  //Initialziation
  var io = socketio.listen(server);

  //Connection Logs
  io.on('connection', (socket) => {

    //Login, Authentication, and logout
    console.log('auser connected', socket.id);
    socket.emit('authenticate');

    socket.on('authenticated', (data) = > {
      console.log(data.username, "is authenticated");
      socket.username = data.username;
      clients[socket.username] = socket.id;
    })

    socket.on('disconnect', () => {
      console.log('user disconnected:', socket.username);
      delete clients[socket.username];
    });

    socket.on('loadMessages', (data) => {
      console.log('Messages Loaded');

    });

    socket.on('newMessage', (message) => {
      console.log('newMessage');
    });

  });

};
