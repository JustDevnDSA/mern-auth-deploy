import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div style={{color:"white"}}>
     <h1> ERROR ! 404 Page not found</h1>
     <h2>Return to home <Link to={"/"} style={{color:"red"}}>Home</Link></h2>
    </div>
  )
}

export default Error
