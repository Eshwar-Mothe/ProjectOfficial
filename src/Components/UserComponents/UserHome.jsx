import React from 'react'
import Dashboard from './Dashboard'

const UserHome = ({user}) => {
  return (
    <>
      <Dashboard userData={user}/>
    </>
  )
}

export default UserHome