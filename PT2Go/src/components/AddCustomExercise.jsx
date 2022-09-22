import axios from 'axios';
import React, { useState, useEffect } from 'react';

function AddCustomExercise(props) {
    
    const [image, setImage] = useState({
        preview: '',
        raw: ''
    });
    const [exName, setExName] = useState('');
    const [exDescription, setExDescription] = useState('');
    const [exCategory, setExCategory] = useState('');

    const handleChange = (e) => {
        setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        });
    }

    const handleNameChange = (e) => {
        setExName(e.target.value)
    }

    const handleDescChange = (e) => {
        setExDescription(e.target.value)
    }

    const handleCategoryChange = (e) => {
            setExCategory(e.target.value)
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        console.log(image, exName, exDescription, exCategory)
        if (image.preview === '' || exName === '' || exDescription === '' || exCategory === '') {
            alert('Missing fields')
        } else {
            const formData = new FormData()
            formData.append('image', image.raw)

            await axios.post('https://630a50baf280658a59cd50c6.mockapi.io/exercises2', {
                name: exName,
                description: exDescription,
                category: exCategory,
                image: image.preview
            });

        }
    }


    return (
        <div className='h-screen dark:bg-gray-800 dark:text-gray-400'>
            <div className='flex flex-col items-center mt-16'>
            Create your own exercises!
                <div className="flex flex-row w-4/5 justify-between py-5">
                    <div className='flex items-center justify-center w-1/4'>
                        {image.preview ? (
                            <img src={image.preview} alt='' className='w-300 h-300' />
                        ) : (
                            <h5></h5>
                        )}
                        <input type='file' accept='image/*' onChange={handleChange}/>
                    </div>
                    <div className="p-4 w-1/2">
                        <textarea onChange={handleNameChange} className='w-full h-1/4 resize-none dark:bg-gray-800 dark:text-gray-400' placeholder='Exercise name'>
                        </textarea>
                        <textarea onChange={handleDescChange} className='w-full h-3/4 resize-none dark:bg-gray-800 dark:text-gray-400' placeholder='Description'>
                        </textarea>
                    </div>
                    <div className='pt-4'>
                        <select onChange={handleCategoryChange} defaultValue={'DEFAULT'}>
                            <option value='DEFAULT' disabled>Category:</option>
                            <option value='shoulder'>Shoulder</option>
                            <option value='lumbar&thoracic'>Lumbar & Thoracic</option>
                            <option value='upperlimbs'>Upper Limbs</option>
                            <option value='lowerlimbs'>Lower Limbs</option>
                        </select>
                    </div>
                </div>
                        <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
}

export default AddCustomExercise;