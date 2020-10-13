import React from 'react'
import ChatBoard from './ChatBoard'
import ChatSidebar from './ChatSidebar';

const ChatPage = () => {
  return (
    <div className='chat-page'>
      <ChatSidebar />
      <ChatBoard />
    </div>
  )
}

export default ChatPage;
