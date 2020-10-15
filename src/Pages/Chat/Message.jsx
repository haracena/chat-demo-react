import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Message = ({ message, messageUid, messageTimestamp }) => {
  const { uid } = useSelector((state) => state.auth);
  return (
    <div
      className={`chat-message ${
        messageUid === uid ? 'chat-message--send' : 'chat-message--recieved'
      }`}
    >
      {messageUid !== uid && (
        <img
          src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='avatar-picture'
          className='chat-message__avatar'
        />
      )}
      <p>{message}</p>
      <p
        className={`chat-message__time ${
          messageUid === uid
            ? 'chat-message__time--send'
            : 'chat-message__time--recieved'
        }`}
      >
        {messageTimestamp && moment(messageTimestamp.toDate()).format('LT')}
      </p>
    </div>
  );
};

export default Message;
