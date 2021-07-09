import './Message.css'

function Message(props) {
    return (
        <div
        className='message'>
            <h3>{props.messageText}</h3>
        </div>
    )
}
export default Message;