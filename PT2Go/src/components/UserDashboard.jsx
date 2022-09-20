import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

function UserDashboard() {

  const [currentHEP, setCurrentHEP] = useState([]);

  const loginState = useSelector((state)=>state);
  const { firstname, lastname, exercises} = loginState;

  // useEffect(() => {

  // }, [])


  console.log(loginState,"outside addExercise")

  return (
      <div className='w-full h-screen dark:bg-gray-800 dark:text-gray-400'>
        Hi {firstname + ' ' + lastname}
        <div className='flex flex-row w-full gap-5'>
          <div className='flex flex-col w-1/3 border-black border-2'>
            <button>Profile</button>
            <button>Add Exercise</button>
          </div>
          <div className='flex flex-col w-2/3 border-black border-2'>
            {exercises.map((data, index) => {
              return  <div className='flex flex-row justify-around items-center' key={index}>
                        <a onClick={() => console.log(data)} href='#'>Exercise Routine {index + 1}</a>
                        <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 m-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
                      </div>
              }
            )}
          </div>
        </div>
      </div>
  )
}

export default UserDashboard