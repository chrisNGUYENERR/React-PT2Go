import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseCards from './ExerciseCards';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Exercises(props) {
    const emailState = useSelector((state)=>state.email)
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [HEP, setHEP] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(8);

    console.log(HEP,"line 14");

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(HEP,"inside handler")
        dispatch({type:"ADD_HEP",payload:{HEP,emailState}})
        dispatch({type:"UPDATE_STORE_HEP",payload:{HEP}})
    }


    const exerciseApi = async () => {
        const response = await axios.get('https://630a50baf280658a59cd50c6.mockapi.io/exercises2');
        const exercises = response.data
        setData(exercises)
    }
    
    useEffect(() => {
        exerciseApi();
    },[]);

    useEffect(() => {
        setFilterData(data)
    }, [data])

    useEffect(() => {
        // console.log('HEP', filterData)
    }, [filterData]);

    //Get current exercises
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = filterData.slice(indexOfFirstExercise, indexOfLastExercise);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    //Categories
    const categories = [
        { name: 'Shoulder', href: '#'},
        { name: 'Lumbar & Thoracic', href: '#'},
        { name: 'Upper Limbs', href: '#'},
        { name: 'Lower Limbs', href: '#'},
      ]

    //Filter exercises
    const filterExercise = (event) => {
        let newData = data.filter(area => {
            return area.category === event.target.innerText
        })
        setFilterData(newData)
    }

    //Show all exercises
    // const allExercises = () => {
    //     setFilterData(data)
    // }

    //Add exercise to state
    const addExercise = (e) => {
            if (HEP.findIndex(name => name.exerciseName === e.target.name) !== -1) {
                alert ('Sorry, exercise already added to HEP.')
            } else {
                setHEP(HEP => [...HEP, {exerciseName: e.target.name, exerciseImg: e.target.src, exerciseDesc: e.target.alt}])
            }
            // console.log('HEP:', HEP)
        }

    //Remove exercise from state
    const removeExercise = (e) => {
        let newHEP = HEP.filter(exercises => exercises.exerciseName !== e.target.name)
        setHEP(newHEP)
    }

    return (
        <div className='flex flex-col items-center justify-center dark:bg-gray-800'>
            <div className='flex flex-row gap-8 items-start justify-center h-3/4 py-12 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col w-1/5 border-2 border-black dark:border-gray-400 dark:text-gray-400'>
                    Categories:
                    {categories.map((area) => {
                        return <a key={area.name} onClick={filterExercise} href={area.href} className=''>
                            {area.name}
                        </a>
                    })}
                    {/* <a onClick={allExercises} href=''>All</a> */}
                </div>
                <div className='flex flex-col w-4/5 border-2 border-black dark:border-gray-400'>
                    <ExerciseCards data={currentExercises} addExercise={addExercise} />
                    <Pagination exercisesPerPage={exercisesPerPage} totalExercises={filterData.length} paginate={paginate} currentPage={currentPage} />
                </div> 
            </div>
            <div className='flex flex-col justify-center items-center w-1/2'>
                <div className='flex flex-row justify-between w-full'>
                    <span>Your HEP:</span>
                    <span>Total:{HEP.length}</span>
                </div>
                <div >
                    <div className='flex flex-row justify-start h-1/4 w-full gap-0.5 overflow-auto'>
                        {HEP.map((exercise) => {
                            return <img src={exercise.exerciseImg} name={exercise.exerciseName} onClick={removeExercise} key={exercise.exerciseName} alt='' className='h-36 w-36 border-2 border-black hover:cursor-pointer hover:opacity-50' />
                        })}
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <button onClick={submitHandler} className='bg-gray-400 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded' type="submit">Save HEP</button>
            </div>
        </div>
    );
}

export default Exercises;