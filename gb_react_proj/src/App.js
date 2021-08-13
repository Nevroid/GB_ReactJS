import './App.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useEffect } from 'react';
import firebase from 'firebase';
import { profileSetIsAuthed } from './store/actions/profileSetData';
import React from 'react';

function App() {
  const dispatch = useDispatch()
  useEffect( () => {
    firebase.auth().onAuthStateChanged(user => {
      console.log({user})
        dispatch(profileSetIsAuthed(!!user))
      })
  }, [])
  return (
    <div className="App">
      
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      
    </div>   
  );
}

export default App;
