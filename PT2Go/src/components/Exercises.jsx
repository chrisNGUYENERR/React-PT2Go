import React from 'react';
import ExerciseCards from './ExerciseCards';

function Exercises(props) {
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
                <div className='flex flex-row h-3/4 w-4/5 bg-gray-800'>
                <ExerciseCards />
                </div>
            </div>
        </div>
    );
}

export default Exercises;