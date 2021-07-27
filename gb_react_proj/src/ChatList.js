import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'
import serverData from './data'
import './ChatList.css'

function ChatList () {
  const [chats] = useState(serverData.chats)
  return (
    <List className='chatList'>
      { chats.map((chat, index) => <ListItem key={index} id={index}><Link to={`/chats/${chat.id}`}>{ chat.name }</Link></ListItem>) } 
    </List>
  )
  }
export default ChatList