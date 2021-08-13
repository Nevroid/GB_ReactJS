import Chatbox from './Chatbox'
import ChatList from './ChatList'
import Profile from './Profile'
import Home from './Home'
import UserList from './UserList'
import TestChat from './TestChat'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import firebase from 'firebase'

const PrivateRoute = (props) => {
  const isAuthed = useSelector(state => state.profile.isAuthed)
  return isAuthed ? <Route {...props} /> : <Redirect to='/login' />
}

function Router () {
  const handleSignOut = (e) => {
    e.preventDefault()
    firebase.auth().signOut()

  }
  return (
    <React.Fragment>
      <div className='header-links'>
        <Link to="/">Home</Link>
        <Link to="/chats/">Chats</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Button variant='outlined' onClick={handleSignOut}>Sign Out</Button>
        <br></br>
        <Link to="/users">Friends</Link>
        <br></br>
        <Link to="/test/1">Test</Link>
      </div>

      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/chats/:chatId" render={() =>
            <div className="chat-area">
              <ChatList />
              <Chatbox />
            </div>} />
          <PrivateRoute exact path="/chats" render={() =>
            <div className="chat-area">
              <ChatList />
            </div>} />
          <PrivateRoute path="/profile">
              <Profile />
          </PrivateRoute>
          <Route path="/users">
              <UserList />
          </Route>
          <Route path="/test/:testChatId">
            <TestChat />
          </Route>
          <Route>
              <p>404: not found</p>
          </Route>
      </Switch>
    </React.Fragment>
  )
}

export default Router