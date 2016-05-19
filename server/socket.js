import socketio from 'socket.io';
import * as chatMethods from './controllers/redisControllers/chat.js';

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

    socket.on('loadMessages', (sender, recipient) => {
      console.log('Attempting to load messages...');
      console.log('Current user is...', sender);
      console.log('Other user is...', recipient);
      chatMethods.getUserMessages(sender, recipient, (messages) => {
        console.log('messages',messages);
        //emit messages back to user that requested messages
      });
    });

    socket.on('newMessage', (sender, recipient, message) => {
      console.log('Received new message...', message);
      chatMethods.sendMessage(sender, recipient, message);
    });

  });

};
