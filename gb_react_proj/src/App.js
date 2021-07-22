import './App.css';
import Message from './Message'
import Chatbox from './Chatbox'
import ChatList from './ChatList'

const text = 'Hello from props!'

function App() {
  return (
    <div className="App">
      <Message messageText={text}/>
      <div className="chat-area">
        <ChatList />
        <Chatbox />
      </div>
    </div>   
  );
}

export default App;
