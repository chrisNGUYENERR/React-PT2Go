import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Exercises(props) {

    const [data, setData] = useState([]);
    
    const exerciseApi = async () => {
        const response = await axios.get('https://630a50baf280658a59cd50c6.mockapi.io/exercises');
        const exercises = response.data
        setData(exercises) 
        // console.log(exercises)
    }

    useEffect(() => {
        exerciseApi();
    }, []);
    
    return (
        <div className='h-screen dark:bg-gray-800'>
            <div className='flex min-h-full items-center justify-center -mt-16 py-12 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col w-3/12 bg-gray-800 text-white'>
                    Categories:
                    <a href='#'>Shoulder</a>
                    <a href='#'>Lumbar + Thoracic</a>
                    <a href='#'>Upper Limbs</a>
                    <a href='#'>Lower Limbs</a>
                </div>
                <div className='w-full bg-gray-800 text-white'>
                    Exercises
                    {/* {console.log(data)} */}
                    {/* <h1>{data[0]?.shoulder[0]?.name}</h1> */}
                    {data.map((data, index) => {
                        data?.shoulder?.map((exercise) => {
                            return  <h1>{exercise.name}</h1>
                            // console.log(exercise.name)
                        })
                    })}
                    
                </div>
            </div>
        </div>
    );
}

export default Exercises;