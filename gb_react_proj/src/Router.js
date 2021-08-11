import Chatbox from './Chatbox'
import ChatList from './ChatList'
import Profile from './Profile'
import Home from './Home'
import UserList from './UserList'
import TestChat from './TestChat'
import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

function Router () {
  return (
    <React.Fragment>
      <div className='header-links'>
        <Link to="/">Home</Link>
        <Link to="/chats/">Chats</Link>
        <Link to="/profile">Profile</Link>
        <br></br>
        <Link to="/users">Friends</Link>
        <br></br>
        <Link to="/test/1">Test</Link>
      </div>

      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chats/:chatId" render={() =>
            <div className="chat-area">
              <ChatList />
              <Chatbox />
            </div>} />
          <Route exact path="/chats" render={() =>
            <div className="chat-area">
              <ChatList />
            </div>} />
          <Route path="/profile">
              <Profile />
          </Route>
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