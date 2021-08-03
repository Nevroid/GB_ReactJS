import {CHAT_ADD_MSG} from '../actions/chatActions'

const initialState = {
    users: {
      user: 'User',
      bot001: 'Bot-1',
      bot002: 'Bot-2',
      bot003: 'Bot-3'
    },
    chats: [
      {
        id: 0,
        messages: [{author: 'Bot-1', text: 'Chat #1 initial message'}],
        name: 'Bot-1'
      },
      {
        id: 1,
        messages: [{author: 'Bot-2', text: 'Chat #2 initial message'}],
        name: 'Bot-2'
      },
      {
        id: 2,
        messages: [{author: 'Bot-3', text: 'Chat #3 initial message'}],
        name: 'Bot-3'
      }
    ]
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHAT_ADD_MSG:
        return {
          // ...state,
          ...state.chats.find(chat => chat.id === action.payload.id).messages.push({author: action.payload.author, text: action.payload.text})
          
        }
      default:
        return state
    }
  }
  
  export default chatReducer