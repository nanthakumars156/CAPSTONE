// src/components/Home.js
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Bulk Email Tool</h1>
      <p>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  )
}

export default Home
