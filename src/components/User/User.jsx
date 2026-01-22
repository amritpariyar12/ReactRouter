import React from 'react'
import { useParams } from 'react-router-dom'
//to get the params from url we use useParams hook provided by react-router-dom
//in this example we are getting userid param from the url

function User() {
    const {userid} = useParams();
  return (
    <div className="bg-blue-600 text-white text-2xl p-4 text-align-center align-items-center">User: {userid}</div>
  )
}

export default User
