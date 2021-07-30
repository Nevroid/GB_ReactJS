import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './ChatList.css'

function ChatList () {
  const [chats] = useState([{name: 'Bot-01', id: 'bot001'}, {name: 'Bot-02', id: 'bot002'}, {name: 'Bot-03', id: 'bot003'}])
  return (
    <List className='chatList'>
      { chats.map((chat, index) => <ListItem id={index}>{ chat.name }</ListItem>) } 
    </List>
  )
  }
export default ChatList