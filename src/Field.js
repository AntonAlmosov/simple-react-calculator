import React from 'react'

const Field = ({inputField, onClick}) =>
  <div className='inputfield-wrapper'>
    <span>{inputField.toString().slice(0,9)}</span>
    <button onClick={onClick}>AC</button>
  </div>

export default Field
