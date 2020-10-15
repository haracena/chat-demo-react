import React, { useEffect, useState } from 'react'
import { myFirebase, myFirestore } from '../../firebase/firebase-config';

const Profile = () => {
  const [] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const registerUser = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="mail" />
      <input type="text" placeholder="password" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="photo url" />
      <button type='submit'>submit</button>
    </form>
  )
}

export default Profile;