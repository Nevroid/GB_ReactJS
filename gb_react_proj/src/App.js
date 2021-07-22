import './App.css';
import Message from './Message'
import Chatbox from './Chatbox'

const text = 'Hello from props!'

function App() {
  return (
    <div className="App">
      <Message messageText={text}/>
      <Chatbox />
    </div>   
  );
}

export default App;
