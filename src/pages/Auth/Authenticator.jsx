import React from 'react'
import { Outlet } from 'react-router-dom'

function Authenticator() {
  return (
    <div>
        Auth
        
        <Outlet />
    </div>

  )
}

export default Authenticator