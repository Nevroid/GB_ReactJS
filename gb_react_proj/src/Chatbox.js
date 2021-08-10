import React, { useEffect, useState } from 'react';
import './Chatbox.css'
import ChatMessage from './ChatMessage'
import serverData from './data'
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { chatAddMsg } from './store/actions/chatActions';


export default function Chatbox() {
  const params = useParams()
  
  // const [messageList, setMessageList] = useState(serverData.chats[params.chatId].messages)
  const {id, name, messages} = useSelector((state) => state.chat.chats.find(chat => chat.id === +params.chatId))

  const dispatch = useDispatch()

  const updateMessageList = (e) => {
    e.preventDefault()
    // console.log(e)
    if (inputValue !== '') {
      dispatch(chatAddMsg({id: +params.chatId, author: serverData.users.user, text: inputValue }))
      setInputValue('')
    } else {
      dispatch(chatAddMsg({id: id, author: name, text: 'You should write something'}))
      

    }
  }
  const [inputValue, setInputValue] = useState('')
  const inputText = (e) => {
    setInputValue(e.target.value)
  }
  useEffect(() => {
    if ( messages.length &&  messages[ messages.length - 1].author !== name) {
      console.log(messages)
      setTimeout(() =>{
        dispatch(chatAddMsg({id: id, author: name, text: 'Your message is: ' + messages[messages.length - 1].text }))
      }, 1000)
    }
  }, [messages, params.chatId, id, name, dispatch])
  return (
    <div className='Chatbox'>
      <div className="messageArea">
        { messages.map((message, index) => <ChatMessage key={index} text={message.text} author={message.author}/>) }
      </div>
      <form onSubmit={updateMessageList}>
        <TextField
          placeholder="Type your message"
          onChange={inputText}
          value={inputValue}
          autoFocus
        />
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={updateMessageList}
        >
          Send
        </Button>
      </form>
    </div>
    )
}
