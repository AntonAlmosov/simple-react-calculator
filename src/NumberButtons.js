import React from 'react'

const NumberButtons = ({keypadOnClick, calculate}) =>
  <div className='keypad'>
    <div>
      <button onClick={keypadOnClick.bind(null, '1')}>1</button>
      <button onClick={keypadOnClick.bind(null, '2')}>2</button>
      <button onClick={keypadOnClick.bind(null, '3')}>3</button>
    </div>
    <div>
      <button onClick={keypadOnClick.bind(null, '4')}>4</button>
      <button onClick={keypadOnClick.bind(null, '5')}>5</button>
      <button onClick={keypadOnClick.bind(null, '6')}>6</button>
    </div>
    <div>
      <button onClick={keypadOnClick.bind(null, '7')}>7</button>
      <button onClick={keypadOnClick.bind(null, '8')}>8</button>
      <button onClick={keypadOnClick.bind(null, '9')}>9</button>
    </div>
    <div>
      <button
        className='button-zero'
        onClick={keypadOnClick.bind(null, '0')}>0</button>
      <button onClick={calculate}>{'='}</button>
    </div>
  </div>

export default NumberButtons
