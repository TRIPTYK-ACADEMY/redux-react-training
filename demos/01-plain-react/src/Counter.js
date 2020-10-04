import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const increment = (e) => {
    e.preventDefault()
    setCounter(counter + 1)
  }
  const decrement = (e) => {
    e.preventDefault()
    setCounter(counter - 1)
  }

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={increment} className="border p-2 m-2 hover:bg-red-400">
        +
      </button>
      <span>{counter}</span>
      <button onClick={decrement} className="border p-2 m-2  hover:bg-red-400">
        -
      </button>
    </div>
  )
}

export default Counter
