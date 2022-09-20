import React from 'react'
import { useDispatch, useSelector } from "react-redux"

function UserDashboard() {
  const loginState = useSelector((state)=>state)
  console.log(loginState,"outside addExercise")
  const dispatch = useDispatch();
  const deleteHandler=(e)=>{
    e.preventDefault();
    //which HEP to delete 
    dispatch({type:"DELETE_HEP",payload:{}})
  }
  return (
    <div >
      Hi {loginState.firstname}
      <div className='my-5'>
                <button onClick={deleteHandler} className='bg-gray-400 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded' type="submit">Save HEP</button>
            </div>
    </div>
  )
}

export default UserDashboard