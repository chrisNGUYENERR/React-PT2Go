import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

function ExerciseCards({data}) {
    
    // const [data, setData] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [exercisesPerPage, setExercisesPerPage] = useState(8);
    
    // const exerciseApi = async () => {
    //     const response = await axios.get('https://630a50baf280658a59cd50c6.mockapi.io/exercises');
    //     const exercises = response.data
    //     setData(exercises) 
    // }

    // const exerciseApi = async () => {
    //     const response = await axios.get('https://630a50baf280658a59cd50c6.mockapi.io/exercises2');
    //     const exercises = response.data
    //     setData(exercises) 
    // }
    
    // useEffect(() => {
    //     exerciseApi();
    // },[]);

    //Get current exercises
    // const indexOfLastExercise = currentPage * exercisesPerPage;
    // const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    // const currentExercises = data.slice(indexOfFirstExercise, indexOfLastExercise);
    
    // const renderShoulderInfo = (data) => {
    //     const { shoulder } = data[0]

    //     let shoulderList = shoulder.map((exercise, index) => {
    //         return <div className="flex flex-col items-center bg-white rounded-lg shadow-lg" key={index}>
    //                     <img src={exercise.image} alt="" className="shrink h-52 w-52 rounded-t-lg" />
    //                     <div className="p-6">
    //                         <a href="#" className="font-bold mb-2 text-xl text-purple-800">{exercise.name}</a>
    //                     </div>
    //                 </div>
    //     })
    //     return shoulderList
    // }

    // const renderLumbarInfo = (data) => {
    //     const { lumbarandthoracic } = data[1]

    //     let lumbarList = lumbarandthoracic.map((exercise, index) => {
    //         return <div className="flex flex-col items-center bg-white rounded-lg shadow-lg" key={index}>
    //                     <img src={exercise.image} alt="" className="h-52 w-52 rounded-t-lg" />
    //                     <div className="p-6">
    //                         <a href="#" className="font-bold mb-2 text-xl text-purple-800">{exercise.name}</a>
    //                     </div>
    //                 </div>
    //     })
    //     return lumbarList
    // }
    
    // const renderUpperlimbInfo = (data) => {
    //     const { upperlimbs } = data[2]

    //     let upperlimbsList = upperlimbs.map((exercise, index) => {
    //         return <div className="flex flex-col items-center bg-white rounded-lg shadow-lg" key={index}>
    //                     <img src={exercise.image} alt="" className="h-52 w-52 rounded-t-lg" />
    //                     <div className="p-6">
    //                         <a href="#" className="font-bold mb-2 text-xl text-purple-800">{exercise.name}</a>
    //                     </div>
    //                 </div>
    //     })
    //     return upperlimbsList
    // }

    // const renderLowerlimbInfo = (data) => {
    //     const { lowerlimbs } = data[3]

    //     let lowerlimbsList = lowerlimbs.map((exercise, index) => {
    //         return <div className="flex flex-col items-center bg-white rounded-lg shadow-lg" key={index}>
    //                     <img src={exercise.image} alt="" className="h-52 w-52 rounded-t-lg" />
    //                     <div className="p-6">
    //                         <a href="#" className="font-bold mb-2 text-xl text-purple-800">{exercise.name}</a>
    //                     </div>
    //                 </div>
    //     })
    //     return lowerlimbsList
    // }


    return (
        <div className='flex flex-row flex-wrap gap-2 w-full m-2 bg-gray-800 text-white'>
            {/* {data.length && renderShoulderInfo(data)} */}
            {/* {data.length && renderLumbarInfo(data)} */}
            {/* {data.length && renderUpperlimbInfo(data)} */}
            {/* {data.length && renderLowerlimbInfo(data)} */}
            {data.map((exercise) => {
                return <div className="flex flex-col items-center bg-white rounded-lg shadow-lg" key={uuid()}>
                            <img src={exercise.image} alt="" className="shrink h-52 w-52 rounded-t-lg" />
                            <div className="p-6">
                                <a href="#" className="font-bold mb-2 text-xl text-purple-800">{exercise.name}</a>
                            </div>
                        </div>
            })}
        </div>
    );
}

export default ExerciseCards;