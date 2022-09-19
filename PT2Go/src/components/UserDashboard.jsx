import React from 'react'
import { useSelector } from "react-redux"

function UserDashboard() {
  const loginState = useSelector((state)=>state)
  console.log(loginState,'inside Userdashboard')
  const loggedInEmail = loginState.email
  const userSavedExercises = loginState.savedExercises
  const addExercise = async (e)=>{
    console.log('click')
    const res = await fetch('http://localhost:1337/api/addExercise',{
      method: 'POST',
      headers : {
          'Content-Type':'application/json'
      },
      body: JSON.stringify({
          email:loggedInEmail,
          exercisesArray:userSavedExercises
          })
        })
        const data = await res.json()
  console.log(data, "inside userdashboard")
  }
  console.log(loginState,"outside addExercise")

  return (
    <div>
      Hi {loginState.firstname}
      <button type="submit" onClick={addExercise}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            />
    </div>
  )
}

export default UserDashboard