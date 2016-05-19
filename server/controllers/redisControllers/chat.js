import redis from 'redis';
import client from '../../db/messagesStore.js';
import * as chats from '../chats.js';


// anticipated sender, recipient, message format
// sender = {id: 10, type:'teacher'};
// recipient = {id: 20, type: 'teacher'};
// message = {body: 'hey whats up?', timestamp: '10:55'};
const teacherOrStudent = (sender, recipient) => {
  let teacher;
  let student;
  if (sender.type === 'teacher') {
    teacher = sender.id;
    student = recipient.id;
  } else {
    teacher = recipient.id;
    student = sender.id;
  }
  return [teacher, student];
};

export const sendMessage = (sender, recipient, message) => {
  const [teacher, student] = teacherOrStudent(sender, recipient);
  const chat = JSON.stringify(message);

  client.on('error', (err) => (
    console.log('Error connecting to redis server in sendMessage ', err)
  ));

  // put sent message into redis store
  client.lpush(`${teacher}and${student}`, chat, (err, reply) => {
    if (err) {
      return console.log('Error pushing message to redis store');
    }
    return reply;
  });
};

export const getUserMessages = (sender, recipient, callback) => {
  const [teacher, student] = teacherOrStudent(sender, recipient);

  client.on('error', (err) => (
    console.log('Error connecting to redis server in getUserMessages ', err)
  ));
  client.lrange(`${teacher}and${student}`, 0, 100, (err, replies) => {
    if (err) {
      return console.log('Error in getUserMessages', err);
    }
    if (replies === 0) {
      return console.log('This student has no chat history!');
    }
    callback(replies);
  });
};

