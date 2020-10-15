import React, { useRef, useEffect } from 'react';
import { myFirestore } from '../../firebase/firebase-config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';

const ChatMessagesBoard = () => {
  const messagesRef = myFirestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const scrollChat = useRef(null);

  const scrollToBottom = () => {
    scrollChat.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    console.log(messages);
    scrollToBottom();
  }, [messages]);

  return (
    <div className='chat-messages-board'>
      {messages &&
        messages.map((msg) => (
          <Message
            key={msg.id}
            message={msg.text}
            messageUid={msg.uid}
            messageTimestamp={msg.createdAt}
            avatar={msg.photoURL}
            displayName={msg.displayName}
          />
        ))}
      <div ref={scrollChat}></div>
    </div>
  );
};

export default ChatMessagesBoard;
