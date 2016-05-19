
  // pop chats from redis and move to persisitent db once a chat between users has 50 msgs
  // client.llen(`${teacher}and${student}`, (error1, reply) => {
  //   if (error1) {
  //     console.log('there was an error getting the length of ${teacher}and${student}', error1);
    // }
    // if (reply > 50) {
    //   client.lrange(`${teacher}and${student}`, 0, 50, (error2, replies) => {
    //     if (error2) {
    //       console.log('error in getting all chats in from range 0-50 in sendMessage', error2);
    //     }
    //     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>replies,', replies);
    //     chats.saveChats(replies.slice(0, 50), teacher, student);
    //   });
    //   for (let i = 0; i < 50; i++) {
    //     client.rpop(`${teacher}and${student}`, (error3) => {
    //       if (error3) {
    //         console.log('error popping off ${teacher}and${student} list');
    //       }
    //     });
    //   }
    // }
  // });