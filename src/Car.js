import React from 'react'

function Car(key, carItem) {
    console.log({carItem})
  return (
    <div key={key} className='card'>
      <h3>{carItem.name}</h3>
      <p>age: {carItem.age}</p>
      <p>color: {carItem.colour}</p>
    </div>
  )
}

export default Car