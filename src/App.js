import React, { Component } from 'react';
import './App.css';

import Field from './Field'
import Buttons from './Buttons'

class App extends Component {
  constructor(){
    super()

    this.state = {
      result: 0,
      inputField: '0',
      curAction: ''
    }
  }

  render() {
    return (
      <div className='calculator-wrapper'>
        <Field inputField={this.state.inputField} onClick={this.clearResult}/>
        <Buttons
          keypadOnClick={this.keypadButtonPress}
          calculate={this.calculate}
          />
      </div>
    )
  }

  clearResult = () =>
    this.setState({result: 0, inputField: '0'})

  keypadButtonPress = (num) =>{
    if(this.state.inputField !== '0'){
      this.setState({result: this.state.result,
        inputField: this.state.inputField + '' + num,
        curAction: this.state.curAction})
      }
    else
      this.setState({result: this.state.result,
        inputField: num,
        curAction: this.state.curAction})
  }

  calculate = () => {

  }
}

export default App;
