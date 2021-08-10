import { API_URL } from "../../data"

export const USERS_GET_LIST = 'USERS_GET_LIST'
export const USERS_SET_ERROR_STATUS = 'USERS_SET_ERROR_STATUS'
export const USERS_SET_IDLE_STATUS = 'USERS_SET_IDLE_STATUS'
export const USERS_SET_LOADING_STATUS = 'USERS_SET_LOADING_STATUS'

export const getUsersList = usersList => ({ 
  type: USERS_GET_LIST,
  payload: { usersList }
})

export const setErrorStatus = () => ({ type: USERS_SET_ERROR_STATUS })
export const setIdleStatus = () => ({ type: USERS_SET_IDLE_STATUS })
export const setLoadingStatus = () => ({ type: USERS_SET_LOADING_STATUS })

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(setLoadingStatus())
    fetch(API_URL).then((res) => {
      if (!res.ok || res.status !== 200) {
        let errorStatus = res.status
        throw Error('Error:', { errorStatus })
      }
      
      return res.json()
      
    })
    .then((res) => {
      console.log(res.data)
      dispatch(getUsersList(res.data))
      dispatch(setIdleStatus())
      
    })
    .catch((error) => {
      dispatch(setErrorStatus())
      console.error(error)
    })
  }
}


// const loadData = () => {
//   setIsLoading(true)
//   setIsError(false)
//   setUsers({})
  // fetch(API_URL).then((res) => {
  //   if (!res.ok || res.status !== 200) {
  //     let errorStatus = res.status
  //     throw Error('Error:', { errorStatus })
  //   }
    
  //   return res.json()
    
  // })
  // .then((res) => {
  //   setUsers(res.data)
  //   setIsLoading(false)
    
  // })
  // .catch((error) => {
  //   setIsLoading(false)
  //   setIsError(true)
  //   console.error(error)
  // })
// }