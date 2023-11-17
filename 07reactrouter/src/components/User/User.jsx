import React from 'react'
import {useParams} from 'react-router-dom'
const User = () => {
    const {userid}= useParams()
  return (
    <div>
      <h1 className='text-center bg-gray-600 text-white text-3xl py-3'>User: {userid}</h1>
    </div>
  )
}

export default User
