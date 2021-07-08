import './App.css';
import Message from './Message'

const text = 'Hello from props!'

function App() {
  return (
    <div className="App">
      <Message messageText={text}/>
    </div>
  );
}

export default App;
