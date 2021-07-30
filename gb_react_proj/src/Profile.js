import React, { useState } from 'react'

function Profile () {
  const [user] = useState({
    name: 'User001',
    age: 20,
    active: false
  })
  return (
    <div>
      <h3>{user.name} Profile</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  )
}

export default Profile