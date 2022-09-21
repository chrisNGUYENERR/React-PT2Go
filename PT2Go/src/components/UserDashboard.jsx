
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

function UserDashboard() {

  const [currentHEP, setCurrentHEP] = useState([]);
  const navigate = useNavigate()
  const loginState = useSelector((state)=>state);
  const { firstname, lastname, exercises, email} = loginState;
  const [HEPStatus, setHEPStatus] = useState(false)
  const dispatch = useDispatch();


  const deleteHandler=(e,index)=>{
    e.preventDefault()
    dispatch({type:"DELETE_REDUX_HEP", payload:{index}})
    dispatch({type:"DELETE_HEP",payload:{email, index}})
  }

  const updateCurrentHEP = (e, data) => {
    e.preventDefault();
    setCurrentHEP(data)
    // console.log(data, 'inside updateHEP')
    setHEPStatus(!HEPStatus)
  }
  
  useEffect(() => { //useEffect will run if the dependency (currentHEP) changes. 
    dispatch({type:"UPDATE_CURRENT_HEP", payload: { currentHEP }})
  }, [currentHEP])

  useEffect(()=>{ //useEffect will run if the dependency (HEPStatus) changes. 
    if (HEPStatus){
      navigate('/hepeditor')
    }
  }, [HEPStatus])

  return (
      <div className='w-full h-screen dark:bg-gray-800 dark:text-gray-400'>
        Hi {firstname + ' ' + lastname}
        <div className='flex flex-row w-full gap-5'>
          <div className='flex flex-col w-1/3 border-black border-2'>
            <button>Profile</button>
            <button>Add Custom Exercise</button>
          </div>
          <div className='flex flex-col w-2/3 border-black border-2'>
            {exercises.map((data, index) => {
              return  <div className='flex flex-row justify-around items-center' key={index}>
                        <a onClick={(e)=>{updateCurrentHEP(e, data)}} href='#'>Exercise Routine {index + 1}</a>
                        <button onClick={(e)=>deleteHandler(e,index)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 m-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
                      </div>
              }
            )}
          </div>
        </div>
      </div>
  )
}

export default UserDashboard