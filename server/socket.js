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

    socket.on('authenticated', (username, id) => {
      console.log(username, 'is authenticated with id', id);
      socket.username = username;
      clients[socket.username] = socket.id;
      console.log('connected', clients);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected:', socket.username);
      delete clients[socket.username];
    });

    socket.on('loadMessages', (sender, recipient) => {
      console.log('Attempting to load messages...');
      console.log('Current user is...', sender);
      console.log('Other user is...', recipient);
      //chatMethods.getUserMessages(sender, recipient, (messages) => {
        // might need to parse messages
        // messages.map( (message) => {
          // return JSON.parse(message);
        // })
      //console.log('messages', messages);
        // emit messages back to user that requested messages
      //socket.emit('messages', messages);
    });
    // socket.on('newMessage', (currentUser, otherUser, message) => {
    //   console.log('Received new message...', message);

    socket.on('newMessage', (messageArray) => {
      console.log(messageArray);

      var author = messageArray[0];
      var body = messageArray[1];
      var recipient = messageArray[2];
      var timeStamp = messageArray[3];
      var senderId = messageArray[4];
      var senderType = messageArray[5];
      var recipientId = messageArray[6];
      var recipientType = messageArray[7];

      var time = new Date();
      var hours = 0;
      var amPM = ' AM';
      if (time.getHours() > 12) {
        hours = time.getHours() - 12;
        amPM = ' PM';
      };

      var now = hours + ":" + time.getMinutes() + amPM;

      messageArray.push(now);

      socket.emit('newMessage', messageArray);
      socket.broadcast.to(clients[author]).emit(messageArray);
      //Redis

      var sender = {
        id: senderId,
        type: senderType
      };
      var recipient = {
        id: recipientId,
        type: recipientType
      };
      var message = {
        author: author,
        body: body,
        timeStamp: time
      }
      //redis handler
      chatMethods.sendMessage(sender, recipient, message);


    });

  });
};

