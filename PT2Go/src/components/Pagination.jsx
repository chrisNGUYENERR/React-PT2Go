import React from 'react';

    function Pagination({ exercisesPerPage, totalExercises, paginate }) {
        const pageNumbers = [];
        for (let i=1; i <= Math.ceil(totalExercises / exercisesPerPage); i++) {
            pageNumbers.push(i);
        }
    

    return (
        <div>
            {pageNumbers.map(number => {
                return <li key={number} className="text-black">
                    <a onClick={() => paginate(number)} href='#' className='text-black'>
                        {number}
                    </a>
                </li>
            })}
        </div>
    );
}

export default Pagination;