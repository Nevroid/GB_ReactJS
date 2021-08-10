import { USERLIST_REQUEST_STATUS } from "../../data"
import { USERS_GET_LIST, USERS_SET_ERROR_STATUS, USERS_SET_IDLE_STATUS, USERS_SET_LOADING_STATUS } from "../actions/usersActions"
const initialState = {
  list: [],
  status: USERLIST_REQUEST_STATUS.IDLE
}
  

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_GET_LIST:
      return {
        ...state,
        list: action.payload.usersList
      }
    case USERS_SET_ERROR_STATUS:
      return {
        ...state,
        status: USERLIST_REQUEST_STATUS.ERROR
      }
    case USERS_SET_IDLE_STATUS:
      return {
        ...state,
        status: USERLIST_REQUEST_STATUS.IDLE
      }
    case USERS_SET_LOADING_STATUS:
      return {
        ...state,
        status: USERLIST_REQUEST_STATUS.LOADING
      }
    
    default: 
      return state
  }
}

  export default usersReducer