import Message from './Message'

const text = 'KirTim App'

function Header () {
  return (
    <div>
      <Message messageText={text}/>
    </div>
  )
}

export default Header