import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../redux/actions/authActions';

const ChatHeader = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <div className="chat-header">
      <h1>Chat Demo</h1>
      <button className='chat-logout-btn' onClick={handleLogout}>Salir</button>
    </div>
  )
}

export default ChatHeader;
