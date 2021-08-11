import {CHAT_ADD_MSG, CHAT_DELETE_CHAT} from '../actions/chatActions'

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
          ...state,
          ...state.chats.find(chat => chat.id === action.payload.data.id).messages.push({author: action.payload.data.author, text: action.payload.data.text})
        }
        case CHAT_DELETE_CHAT:
          console.log(action.payload.data)
          const index = state.chats.indexOf(state.chats.find(chat => chat.id === action.payload.data))
          console.log(index)
          return {
          ...state
          }
      default:
        return state
    }
  }
  
  export default chatReducer