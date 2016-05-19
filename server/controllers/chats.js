import Chat from '../models/Chat.js';

export const saveChats = (chats, teacher, student) => {
  for (let i = 0; i < chats.length; i++) {
    Chat.create({
      authorId: chats[i].author,
      timestamp: chats[i].timestamp,
      teacherId: teacher.id,
      studentId: student.id,
      body: chats[i].body,
    });
  }
};
