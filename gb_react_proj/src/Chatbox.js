import React, { useEffect, useState } from 'react';
import './Chatbox.css'
import ChatMessage from './ChatMessage'
import serverData from './data'
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"


function Chatbox() {
  const [messageList, setMessageList] = useState([])
  const [inputValue, setInputValue] = useState('')
  const updateMessageList = (e) => {
    e.preventDefault()
    // console.log(e)
    if (inputValue !== '') {
      setMessageList([...messageList, {author: serverData.users.user, text: inputValue}])
      setInputValue('')
    } else {
      setMessageList([...messageList, {author: serverData.users.bot, text: 'You should write something'}])

    }
  }
  const inputText = (e) => {
    setInputValue(e.target.value)
  }
  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== serverData.users.bot) {
      setTimeout(() =>{
        setMessageList([...messageList, {author: serverData.users.bot, text: 'Your message is: ' + messageList[messageList.length - 1].text}])
      }, 1000)
    }
  }, [messageList])
  return (
    <div className='Chatbox'>
      <div className="messageArea">
        { messageList.map((message, index) => <ChatMessage key={index} text={message.text} author={message.author}/>) }
      </div>
      <form onSubmit={updateMessageList}>
        {/* <input value={inputValue} placeholder="Type your message" onChange={inputText}></input>
        <button>Submit</button> */}
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
export default Chatbox;
