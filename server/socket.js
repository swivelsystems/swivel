import socketio from 'socket.io';

const clients = {};

export const socketServer = (app, server) => {
  // Initialziation
  const io = socketio.listen(server);

  // Connection Logs
  io.on('connection', (socket) => {
    // Login, Authentication, and logout

    console.log('a user connected', socket.id);
    socket.emit('authenticate');

    socket.on('authenticated', (data) => {
      console.log(data.username, 'is authenticated');
      socket.username = data.username;
      clients[socket.username] = socket.id;
    });

    socket.on('disconnect', () => {
      console.log('user disconnected:', socket.username);
      delete clients[socket.username];
    });

    socket.on('loadMessages', (currentUser, otherUser) => {
      console.log('Attempting to load messages...');
      console.log('Current user is...', currentUser);
      console.log('Other user is...', otherUser);
    });

    socket.on('newMessage', (currentUser, otherUser, message) => {
      console.log('Received new message...', message);
    });

  });

};
