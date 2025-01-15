// src/components/Dashboard.js
import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <Link to="/email-template">Create Email Template</Link>
    </div>
  )
}

export default Dashboard
