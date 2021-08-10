import { Button, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'
import React from 'react'
import { USERLIST_REQUEST_STATUS } from './data'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store/actions/usersActions'

export default function UserList () {
  
  const dispatch = useDispatch()
  const loadData = () => {
    dispatch(fetchUsers())
  }

  React.useEffect(() => {
    dispatch(fetchUsers())
    
  }, [])
  const {status, list} = useSelector(state => state.users)

 
  if (status === USERLIST_REQUEST_STATUS.LOADING) {
    return (
      <React.Fragment>
      <h2>Users</h2>
      <h3>Page is loading...</h3>
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <h2 onClick={loadData}>Users</h2>
      <div style={{ display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden' }}>
      {status !== USERLIST_REQUEST_STATUS.ERROR ? (
        <ImageList rowHeight={180} style={{width: 500, height: 800}}>
        {list.map((user) => (
          <ImageListItem key={user.avatar}>
            <img src={user.avatar} alt={user.first_name} />
            <ImageListItemBar
              title={user.first_name}
              subtitle={<span>{user.second_name}</span>}
              actionIcon={
                <IconButton aria-label={`email: ${user.email}`} style={{ color: 'lightslategray' }}>
                  Email
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>) : (
          <React.Fragment>
            <h3>Error ocured</h3>
            <Button onClick={loadData}>Reload?</Button>
          </React.Fragment>
        )
      }
      </div>
        
    </React.Fragment>
  )
}