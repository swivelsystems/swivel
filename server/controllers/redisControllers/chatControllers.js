import redis from 'redis';
import client from '../../db/messagesStore.js';
import * as chats from '../chats.js';


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

  client.lpush(`${teacher}and${student}`, chat, redis.print);

  // move storage to persisitent db once a chat between users has 50 msgs
  client.llen(`${teacher}and${student}`, (err, reply) => {
    if (err) {
      console.log('there was an error getting the length of ${teacher}and${student}');
    }
    if (reply > 50) {
      client.lrange(`${teacher}and${student}`, 0, 50, (err3, replies) => {
        if (err3) {
          console.log('error in getting all chats in from range 0-50 in sendMessage', err3);
        }
        chats.saveChats(replies.slice(0, 50), teacher, student);
      });
      for (let i = 0; i < 50; i++) {
        client.rpop(`${teacher}and${student}`, (err1) => {
          if (err1) {
            console.log('error popping off ${teacher}and${student} list');
          }
        });
      }
    }
  });
};

export const getUserMessages = (sender, recipient) => {
  const [teacher, student] = teacherOrStudent(sender, recipient);

  client.on('error', (err) => (
    console.log('Error connecting to redis server in getUserMessages ', err)
  ));
  client.lrange(`${teacher}and${student}`, 0, 10, (err, replies) => {
    if (err) {
      return console.log('Error in getUserMessages', err);
    }
    if (replies === 0) {
      return console.log('This student has no chat history!');
    }
    return replies;
  });
};

