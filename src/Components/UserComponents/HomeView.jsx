import React from 'react'
import UserDocsViewer from './UserDocsViewer'

const HomeView = ({ user }) => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <div className="inner-content d-flex gap-5 justify-content-center">
        <p><strong>ID:</strong> {user.uid}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>State:</strong> {user.state}</p>
      </div>
    </div>
  )
}

export default HomeView
