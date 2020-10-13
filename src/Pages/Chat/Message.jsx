import React from 'react'
import { useSelector } from 'react-redux';

const Message = ({message, messageUid}) => {
  const {uid} = useSelector(state => state.auth);
  return (
    <div className={messageUid === uid ? 'chat-message chat-message--recieved' : 'chat-message'}>
      <p>{message}</p>
    </div>
  )
}

export default Message;
