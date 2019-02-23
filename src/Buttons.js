import React from 'react'

import ActionButtons from './ActionButtons'
import NumberButtons from './NumberButtons'

const Buttons = (props) =>
  <div className='buttons-wrapper'>
    <NumberButtons {...props}/>
    <ActionButtons {...props}/>
  </div>

export default Buttons
