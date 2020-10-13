import React from 'react'

const ChatMessageTab = () => {
  return (
    <div className='chat-message-tab'>
      <input type="text" className='chat-message-tab__input-text' placeholder='Escribe tu mensaje' />
      <button className='chat-message-tab__send-btn'>Enviar</button>
    </div>
  )
}

export default ChatMessageTab;
