import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {profileShowName} from './store/actions/profileShowName'
import {profileSetData} from './store/actions/profileSetData'

function Profile () {

  const [userData, setUserData] = useState({
    name: '',
    age: 100,
  })
  const inputChange = (e) => {
    setUserData(e.target.value)
  }

  const {name, age, showName} = useSelector((state) => state.profile)

  const dispatch = useDispatch()
  const setShowName = () => {
    dispatch(profileShowName())
  }
  const setData = (e) => {
    e.preventDefault()
    dispatch(profileSetData(userData))
  }

  return (
    <div>
      <input 
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
        {showName && 
        <div>
        <h3>{name} Profile</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>}
      <div>
        <form onSubmit={setData}>
          <input 
            value={userData.name}
            placeholder='Name'
            onChange={inputChange}
            type='text'
          />
          {/* <input 
            value={userData.age}
            placeholder='Age'
            type='number'
          /> */}
        </form>
      </div>
    
    </div>
  )
}

export default Profile