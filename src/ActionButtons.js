import React from 'react'

const ActionButtons = ({setCurAction}) =>
  <div>
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
