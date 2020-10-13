import React from 'react'
import { useSelector } from 'react-redux';
import ChatBoard from './ChatBoard'
import ChatSidebar from './ChatSidebar';

const ChatPage = ({history}) => {
  const {uid} = useSelector(state => state.auth);

  !uid && history.push('/');

  return (
    <div className='chat-page'>
      {/* <ChatSidebar /> */}
      <ChatBoard />
    </div>
  )
}

export default ChatPage;
