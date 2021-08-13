import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import firebase from 'firebase'

export default function Login (props) {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [err, setErr] = useState('')
  function handleEmailChange(e) {
    e.preventDefault()
    setEmail(e.target.value)
  }
  function handlePwdChange(e) {
    e.preventDefault()
    setPwd(e.target.value)
  }
  const handleLogin = async () => {
    console.log(email, pwd)
    setErr('')
    
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pwd)
    } catch (error) {
      setErr(error.message)
      console.error(err)
    }

  }
  const handleRegistration = async () => {
    console.log(email, pwd)
    setErr('')
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pwd)
    } catch (error) {
      setErr(error.message)
      console.error(err)
    }
  }
  return (
    <React.Fragment>
      <h3>Login</h3>
      <p>{err}</p>
      <form onSubmit={handleLogin}>
        <TextField 
        type='email' 
        value={email} 
        placeholder='E-Mail'
        onChange={handleEmailChange}/>
        <TextField 
        type='password' 
        value={pwd} 
        placeholder='Enter password'
        onChange={handlePwdChange}/>
        <Button variant='outlined' onClick={handleLogin}>Login</Button>
        <Button variant='outlined' onClick={handleRegistration}>New User</Button>
      </form>
    </React.Fragment>
  )
}