import React, { useState } from 'react'
import axios from 'axios'
import '../components/css/ColorSelect.css'

const ColorSelect = () => {
  const [color , setColor] = useState('blue')
  const colors = ['red', 'blue', 'orange', 'yellow', 'green', 'magenta', 'pink']

  const colorBlock = () => {
    return colors.map((arrayColor, colorIdx) => {
      return (
        <div
          onClick={() => setColor(arrayColor)}
          className="colorBlock"
          style={{ backgroundColor: arrayColor }}
          key={`${colorIdx}`}
        />
      )
    })
  }

  return (
    <div className="background-ColorSelect" style={{ backgroundColor: color }}>
      <div className="colorButtons">
        {
          colorBlock()
        }
      </div>
    </div>  
  )
}

export default ColorSelect