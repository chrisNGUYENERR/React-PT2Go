import React from 'react'
import { useSelector } from "react-redux"

function UserDashboard() {
  const loginState = useSelector((state)=>state.loginState)
  
  const state = useSelector((state) => state)
  console.log('state:', state)

  console.log(loginState,"inside dashboard")
  return (
    <div>
      Hi {loginState.firstname}
    </div>
  )
}

export default UserDashboard