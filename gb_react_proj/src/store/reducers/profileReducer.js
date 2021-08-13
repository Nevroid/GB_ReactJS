import { PROFILE_SET_DATA, PROFILE_SET_ISAUTHED } from '../actions/profileSetData'
import { PROFILE_SHOW_NAME } from '../actions/profileShowName'

const initialState = {
  showName: true,
  name: 'John Doe',
  age: 100,
  isAuthed: false
}


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SHOW_NAME:
      return {
        ...state,
        showName: !state.showName
      }
    case PROFILE_SET_DATA:
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age      
      }
    case PROFILE_SET_ISAUTHED:
      return {
        ...state,
        isAuthed: action.payload.isAuthed
      }
    default:
      return state
  }
}

export default profileReducer
