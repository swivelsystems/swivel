import socket from '../../../../utils/socket.js';

export function getPreviousMessages(id, callback) {
  socket.emit('loadMessages', id);
  socket.on('loadMessages', function(messages) {
    messages.forEach((message) => (callback(message)));
  });
}

export function listenForNewMessages(id, callback) {
  socket.on('newMessage', function(message) {
    callback(message, id);
  });
}

export function disconnect(callback) {
  socket.emit('disconnect', callback);
}

export function sendMessage(message, callback) {
  socket.emit('newMessage', message);
  callback(message);
}
