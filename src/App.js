import React, { Component } from 'react';
import './App.css';

import Field from './Field'
import Buttons from './Buttons'

class App extends Component {
  constructor() {
    super()

    this.state = {
      result: 0,
      inputField: '0',
      displayField: '0',
      curAction: ''
    }
  }

  render() {
    return (
      <div className='calculator-wrapper'>
        <Field inputField={this.state.displayField} onClick={this.clearResult} />
        <Buttons
          curState={this.state}
          keypadOnClick={this.keypadButtonPress}
          calculate={this.calculateOnClick}
          setCurAction={this.setCurAction}
        />
      </div>
    )
  }



  //ac button callback
  clearResult = () =>
    this.setState({ result: 0, inputField: '0', displayField: '0', curAction: '' })

  //keypad button callback
  keypadButtonPress = (num) => {
    if (this.state.curAction === 'calc') {
      this.setState({
        result: this.state.result,
        inputField: num,
        displayField: num,
        curAction: ''
      })
    }
    else if (this.state.inputField !== '0') {
      this.setState({
        result: this.state.result,
        inputField: this.state.inputField + '' + num,
        displayField: this.state.inputField + '' + num,
        curAction: this.state.curAction
      })
    }
    else
      this.setState({
        result: this.state.result,
        inputField: num,
        displayField: num,
        curAction: this.state.curAction
      })
  }

  //calculate button callback
  calculateOnClick = () => {
    if (this.curAction !== '')
      this.setState({
        result: this.calculate(this.state.result, parseFloat(this.state.inputField, 10), this.state.curAction),
        inputField: this.state.inputField,
        displayField:
          this.calculate(
            this.state.result,
            parseFloat(this.state.inputField, 10),
            this.state.curAction),
        curAction: 'calc'
      })
  }

  //action button callback
  setCurAction = (action) => {
    if (this.state.curAction === '')
      this.setState({
        result: parseFloat(this.state.inputField, 10),
        inputField: '0',
        displayField: '0',
        curAction: action
      })
    else if (this.state.curAction === 'calc') {
      this.setState({
        result: parseFloat(this.state.displayField, 10),
        inputField: '0',
        displayField: '0',
        curAction: action
      })
    }
    else
      this.setState({
        result: this.calculate(this.state.result, parseFloat(this.state.displayField, 10), this.state.curAction),
        inputField: this.state.displayField,
        displayField: this.calculate(this.state.result, parseFloat(this.state.inputField, 10), this.state.curAction),
        curAction: action
      })
  }

  //calculate helper function
  calculate = (firstNum, secondNum, action) => {
    if (action === '+')
      return firstNum + secondNum
    else if (action === '-')
      return firstNum - secondNum
    else if (action === '*')
      return firstNum * secondNum
    else if (action === '/')
      return firstNum / secondNum
  }
}

export default App;
