import React from 'react';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const Chatpage = (props) => {
  const chatProps = useMultiChatLogic(
    '0989cc23-3a3c-44dd-be1d-1936b4a8cb4e', 
    props.user.username, 
    props.user.secret);
    
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  )
}
export default Chatpage;