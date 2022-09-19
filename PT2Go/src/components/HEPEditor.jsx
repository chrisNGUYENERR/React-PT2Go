import React from 'react';

function HEPEditor(props) {


    return (
        <div className='flex flex-col items-center dark:bg-gray-800 dark:text-gray-400'>
            <div className="flex flex-row w-3/4 justify-between rounded-lg shadow-md">
                <div className='flex items-center justify-center w-1/4'>
                    <img
                        className="object-cover w-full h-48"
                        src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                        alt="image"
                    />
                </div>
                <div className="p-4 w-1/2">
                   <textarea className='w-full h-full' defaultValue={'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae optio facilis expedita, eos perferendis, a accusamus qui natus quod dolorum dignissimos. Omnis, cumque? Fuga id error provident sunt minus.'}>

                   </textarea>
                </div>
                <div className='flex flex-col justify-start items-start w-1/4'>
                    <div className='flex flex-row w-full justify-between items-center'>
                        <span>Repeat</span>
                        <select className='w-1/8 lg:max-w-sm'>
                            <option>1 Time</option>
                            <option>2 Time</option>
                            <option>3 Time</option>
                        </select>
                    </div>
                    <div className='flex flex-row w-full justify-between items-center'>
                        Hold
                        <select>
                            <option>1 Second</option>
                            <option>2 Second</option>
                            <option>3 Second</option>
                        </select>
                    </div>
                    <div className='flex flex-row w-full justify-between items-center'>
                        Complete
                        <select>
                            <option>1 Set</option>
                            <option>2 Sets</option>
                            <option>3 Sets</option>
                        </select>
                    </div>
                    <div className='flex flex-row w-full justify-between items-center'>
                        Perform
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className='flex flex-row w-full justify-between items-center'>
                        Times
                        <select>
                            <option>a Day</option>
                            <option>a Week</option>
                            <option>an Hour</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HEPEditor;