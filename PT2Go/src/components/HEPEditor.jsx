import React from 'react';
import { useSelector } from 'react-redux';

function HEPEditor(props) {
    
    const HEPState = useSelector((state) => state.exercises)

    return (
        <div className='h-screen dark:bg-gray-800 dark:text-gray-400'>
            <div className='flex flex-col items-center mt-16'>
                {HEPState.map(exercise => {
                    const { exerciseName, exerciseImg, exerciseDesc } = exercise;
                        return <div className="flex flex-row w-4/5 justify-between py-5 border-b-2 border-black" key={exerciseName}>
                                    <div className='flex items-center justify-center w-1/4'>
                                        <img
                                            className="object-cover w-48 h-48"
                                            src={exerciseImg}
                                            alt=""
                                        />
                                    </div>
                                    <div className="p-4 w-1/2">
                                        <textarea className='w-full h-1/4 resize-none dark:bg-gray-800 dark:text-gray-400' defaultValue={exerciseName}>
                                        </textarea>
                                        <textarea className='w-full h-3/4 resize-none dark:bg-gray-800 dark:text-gray-400' defaultValue={exerciseDesc}>
                                        </textarea>
                                    </div>
                                    <div className='flex flex-col justify-start items-start w-1/4 text-sm gap-y-3'>
                                        <div className='flex flex-row w-full justify-between items-center'>
                                            <div className='flex flex-row justify-start w-1/2'>
                                                Repeat
                                            </div>
                                            <div className='w-1/2'>
                                                <select className='w-full text-sm py-0'>
                                                    <option>---------------</option>
                                                    <option>1 Time</option>
                                                    <option>2 Times</option>
                                                    <option>3 Times</option>
                                                    <option>4 Times</option>
                                                    <option>5 Times</option>
                                                    <option>6 Times</option>
                                                    <option>7 Times</option>
                                                    <option>8 Times</option>
                                                    <option>9 Times</option>
                                                    <option>10 Times</option>
                                                    <option>11 Times</option>
                                                    <option>12 Times</option>
                                                    <option>13 Times</option>
                                                    <option>14 Times</option>
                                                    <option>15 Times</option>
                                                    <option>16 Times</option>
                                                    <option>17 Times</option>
                                                    <option>18 Times</option>
                                                    <option>19 Times</option>
                                                    <option>20 Times</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex flex-row w-full justify-between items-center'>
                                            <div className='flex flex-row justify-start w-1/2'>
                                                Hold
                                            </div>
                                            <div className='w-1/2'>
                                                <select className='w-full text-sm py-0'>
                                                    <option>---------------</option>
                                                    <option>1 Second</option>
                                                    <option>2 Seconds</option>
                                                    <option>3 Seconds</option>
                                                    <option>4 Seconds</option>
                                                    <option>5 Seconds</option>
                                                    <option>6 Seconds</option>
                                                    <option>7 Seconds</option>
                                                    <option>8 Seconds</option>
                                                    <option>9 Seconds</option>
                                                    <option>10 Seconds</option>
                                                    <option>15 Seconds</option>
                                                    <option>20 Seconds</option>
                                                    <option>30 Seconds</option>
                                                    <option>45 Seconds</option>
                                                    <option>1 Minute</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex flex-row w-full justify-between items-center'>
                                            <div className='flex flex-row justify-start w-1/2'>
                                                Complete
                                            </div>
                                            <div className='w-1/2'>
                                                <select className='w-full text-sm py-0'>
                                                    <option>---------------</option>
                                                    <option>1 Set</option>
                                                    <option>2 Sets</option>
                                                    <option>3 Sets</option>
                                                    <option>4 Sets</option>
                                                    <option>5 Sets</option>
                                                    <option>6 Sets</option>
                                                    <option>7 Sets</option>
                                                    <option>8 Sets</option>
                                                    <option>9 Sets</option>
                                                    <option>10 Sets</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex flex-row w-full justify-between items-center'>
                                            <div className='flex flex-row justify-start w-1/2'>
                                                Perform
                                            </div>
                                            <div className='w-1/2'>
                                                <select className='w-full text-sm py-0'>
                                                    <option>---------------</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                    <option>13</option>
                                                    <option>14</option>
                                                    <option>15</option>
                                                    <option>16</option>
                                                    <option>17</option>
                                                    <option>18</option>
                                                    <option>19</option>
                                                    <option>20</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex flex-row w-full justify-between items-center'>
                                            <div className='flex flex-row justify-start w-1/2'>
                                                Times
                                            </div>
                                            <div className='w-1/2'>
                                                <select className='w-full text-sm py-0'>
                                                    <option>---------------</option>
                                                    <option>a Day</option>
                                                    <option>a Week</option>
                                                    <option>an Hour</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                })}
            </div>
            {/* <div>
                <button className="group relative flex w-1/8 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Save Routine
                </button>
                <button className="group relative flex w-1/8 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Print
                </button>
            </div> */}
        </div>
    );
}

export default HEPEditor;