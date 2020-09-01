import React, {useState} from 'react'

//Siempre deben de ejecutarse al nivel más alto del componente
// No definirlas en funciones, if o ciclos

const CountComponent = () => {
  const [count, setCount] = useState(0)
  //[0, ()=>{}]

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
      <h2>
        Contador { count }
      </h2>
      <div onClick={add}>
        Suma
      </div>
      <div onClick={reduce}>
        Resta 
      </div>
      <h3>
      </h3>
      
    </div>
  )
}

export default CountComponent