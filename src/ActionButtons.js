import React from 'react'

const ActionButtons = ({setCurAction}) =>
  <div className='action-buttons'>
    <div>
      <button onClick={setCurAction.bind(null, '+')}>+</button>
    </div>
    <div>
      <button onClick={setCurAction.bind(null, '-')}>-</button>
    </div>
    <div>
      <button onClick={setCurAction.bind(null, '*')}>*</button>
    </div>
    <div>
      <button onClick={setCurAction.bind(null, '/')}>/</button>
    </div>
  </div>

export default ActionButtons
