import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TrafficLight = () => {
  const lighState = useSelector((state) => state.lighState)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Traffic Light</h2>
      <div className="w-9 flex flex-col border bg-gray-500">
        <p
          className={`m-1 inline-flex items-center justify-center h-6 w-6 rounded-full ${
            lighState === 'red' ? 'bg-red-500' : 'bg-gray-100'
          }`}
        ></p>
        <p
          className={`m-1 inline-flex items-center justify-center h-6 w-6 rounded-full ${
            lighState === 'orange' ? 'bg-orange-500' : 'bg-gray-100'
          }`}
        ></p>
        <p
          className={`m-1 inline-flex items-center justify-center h-6 w-6 rounded-full ${
            lighState === 'green' ? 'bg-green-300' : 'bg-gray-100'
          }`}
        ></p>
      </div>
      <div>
        <button
          className=" p-2 border hover:bg-green-500 hover:text-white"
          type="button"
          onClick={() => dispatch({ type: 'SET_RED' })}
        >
          Set to red
        </button>
        <button
          className="p-2 border hover:bg-green-500 hover:text-white"
          type="button"
          onClick={() => dispatch({ type: 'SET_ORANGE' })}
        >
          Set to orange
        </button>
        <button
          className="p-2 border hover:bg-green-500 hover:text-white"
          type="button"
          onClick={() => dispatch({ type: 'SET_GREEN' })}
        >
          Set to green
        </button>
      </div>
    </div>
  )
}
export default TrafficLight
