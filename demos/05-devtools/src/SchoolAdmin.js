import React from 'react'
import { useSelector } from 'react-redux'

const SchoolAdmin = () => {
  const houses = useSelector((state) => Object.values(state.houses))
  const selectedHouse = useSelector((state) => state.selectedHouse)
  console.log(houses)
  return (
    <div>
      {houses.map((house) => (
        <span>{house.name}</span>
      ))}
    </div>
  )
}

export default SchoolAdmin
