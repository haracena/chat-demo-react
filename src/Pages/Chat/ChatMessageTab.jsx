import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { myFirestore, timeStamp } from '../../firebase/firebase-config';

const ChatMessageTab = () => {
  const [message, setMessage] = useState('');
  const messagesRef = myFirestore.collection('messages');
  const { uid, displayName, photoURL } = useSelector((state) => state.auth);

  const handleChange = ({ target }) => {
    // console.log(target.value);
    setMessage(target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (message.length > 0) {
        console.log(message, uid);
        await messagesRef.add({
          text: message,
          createdAt: timeStamp,
          uid,
          displayName,
          photoURL
        });
        setMessage('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='chat-message-tab' onSubmit={onSubmit}>
      <input
        type='text'
        className='chat-message-tab__input-text'
        placeholder='Escribe tu mensaje...'
        onChange={handleChange}
        value={message}
      />
      {/* <div className='btn-container'> */}
      <button className='btn-send-message'></button>
      {/* </div> */}
    </form>
  );
};

export default ChatMessageTab;
