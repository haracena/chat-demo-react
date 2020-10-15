import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Message = ({ message, messageUid, messageTimestamp, avatar, displayName }) => {
  const { uid } = useSelector((state) => state.auth);
  return (
    <div
      className={`chat-message ${
        messageUid === uid ? 'chat-message--send' : 'chat-message--recieved'
      }`}
    >
      {messageUid !== uid && (
        <img
          src={avatar}
          alt='avatar-picture'
          className='chat-message__avatar'
        />
      )}
      {messageUid !== uid && <p className='chat-message__displayName'>{displayName}</p>}
      <p className='chat-message__text'>{message}</p>
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
