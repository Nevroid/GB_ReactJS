import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'

import './ChatList.css'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { deleteChat } from './store/actions/chatActions';

export default function ChatList () {
  const dispatch = useDispatch()
  const chats = useSelector((state) => state.chat.chats)
  const deleteThis = (chatId) => {
    if (chats.length > 1)  
    console.log(chatId)
    dispatch(deleteChat(chatId))
  }
  return (
    <List className='chatList'>
      { chats.map((chat, index) => <ListItem key={index} id={index}><Link to={`/chats/${chat.id}`}>{ chat.name }</Link><Button onClick={() => deleteThis(chat.id)}>Del</Button></ListItem>) } 
    </List>
  )
  }
