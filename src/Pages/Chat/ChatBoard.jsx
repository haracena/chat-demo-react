import React from 'react'
import ChatHeader from './ChatHeader'
import ChatMessagesBoard from './ChatMessagesBoard'
import ChatMessageTab from './ChatMessageTab'

const ChatBoard = () => {
  return (
    <main className='chat-board'>
      <ChatHeader />
      <ChatMessagesBoard />
      <ChatMessageTab />
    </main>
  )
}

export default ChatBoard
