import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"

import ChatMessage from './ChatMessage'

export default function TestChat () {
  const {testChatId} = useParams()
  
  const {messages} = useSelector((state) => state.chat.chats.find(chat => chat.id === +testChatId))

  const [inputValue, setInputValue] = useState('')
  const inputText = (e) => {
    setInputValue(e.target.value)
  }
  
  return (
//     <div className='Chatbox'>
//     <div className="messageArea">
//       { messages.map((message, index) => <ChatMessage key={index} text={message.text} author={message.author}/>) }
//     </div>
//     {/* <form>
//       <TextField
//         placeholder="Type your message"
//         onChange={inputText}
//         value={inputValue}
//         autoFocus
//       />
//       <Button 
//         variant="outlined" 
//         color="primary" 
//         onClick={updateMessageList}
//       >
//         Send
//       </Button>
//     </form> */}
//   </div>

<div className='Chatbox'>
  <div className="messageArea"></div>
  <form>
    <TextField
      placeholder="Type your message"
      onChange={inputText}
      value={inputValue}
      autoFocus
    />
    <Button 
      variant="outlined" 
      color="primary" 
      onClick={console.log('click')}
    >
      Send
    </Button>
  </form>
</div>

  )
}

