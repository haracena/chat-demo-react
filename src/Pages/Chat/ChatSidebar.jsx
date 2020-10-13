import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { startGetRealtimeUsers } from '../../redux/actions/chatActions';

const ChatSidebar = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetRealtimeUsers());
  }, []);

  return (
    <aside className='chat-sidebar'>
      holaa sidebar
    </aside>
  )
}

export default ChatSidebar;
