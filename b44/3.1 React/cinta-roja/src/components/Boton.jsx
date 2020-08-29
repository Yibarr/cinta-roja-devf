import React, { useState } from 'react'

const Boton = () => {
  const [ count, setCount ] = useState(0)

  const add = () => {
    const result = count + 1
    setCount(result)
  }
  
  const reduce = () => {
    const result = count - 1
    setCount(result)

  }

  return (
    <div>
      <h5>Clicked { count } times!</h5>
      <div onClick={add}>
          Add
      </div>
      <div onClick={reduce}>
          Reduce
      </div>
    </div>
  )
}

export default Boton