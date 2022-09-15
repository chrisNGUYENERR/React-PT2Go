import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseCards from './ExerciseCards';
import Pagination from './Pagination';

function Exercises(props) {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(8);

    const exerciseApi = async () => {
        const response = await axios.get('https://630a50baf280658a59cd50c6.mockapi.io/exercises2');
        const exercises = response.data
        setData(exercises) 
    }
    
    useEffect(() => {
        exerciseApi();
    },[]);

    //Get current exercises
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = data.slice(indexOfFirstExercise, indexOfLastExercise);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className='flex flex-col items-center justify-center h-full dark:bg-gray-800'>
            <div className='flex flex-row gap-3 items-center justify-center -mt-16 py-12 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col h-3/4 w-1/5 bg-gray-800 text-white'>
                    Categories:
                    <a href='#'>Shoulder</a>
                    <a href='#'>Lumbar + Thoracic</a>
                    <a href='#'>Upper Limbs</a>
                    <a href='#'>Lower Limbs</a>
                </div>
                <div className='flex flex-row h-3/4 w-4/5 bg-gray-800 '>
                <ExerciseCards data={currentExercises}/>
                </div> 
            </div>
                <Pagination exercisesPerPage={exercisesPerPage} totalExercises={data.length} paginate={paginate} />
        </div>
    );
}

export default Exercises;