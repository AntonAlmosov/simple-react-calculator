import React from 'react'

const Field = ({inputField, onClick}) =>
  <div className='inputfield-wrapper'>
    <span>{inputField}</span>
    <button onClick={onClick}>AC</button>
  </div>

export default Field
