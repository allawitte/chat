const EventEmitter = require('events');

class ChatApp extends EventEmitter {
  /**
   * @param {String} title
   */
  constructor(title) {
    super();


    this.title = title;

    // ???????? ?????? ??????? ?????????
    setInterval(() => {
      this.emit('message', `${this.title}: ping-pong`);
    }, 1000);
  }
  close(msg) {
   this.emit('close', `$msg`)
  }
}

let webinarChat =  new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat =       new ChatApp('---------vk');

let chatOnMessage = (message) => {
  console.log(message);
};
let prepForAnswer = () => {
  console.log('Prepere for answer');
};
let chatClose = () => {
  console.log('Chat got close :((');
};

webinarChat.on('message', chatOnMessage);
webinarChat.on('message', prepForAnswer);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', chatOnMessage);
vkChat.setMaxListeners(2);
vkChat.on('message', prepForAnswer);
vkChat.close('Chat got close :((');
vkChat.on('close', chatClose);


// ??????? ?????????
setTimeout( ()=> {
  console.log('???????? ?????????...');
  vkChat.removeListener('message', chatOnMessage);
}, 1000 );


// ??????? ???????
setTimeout( ()=> {
  console.log('???????? ???????, ??? ???????? — ????????!');
  facebookChat.removeListener('message', chatOnMessage);
}, 1500 );
