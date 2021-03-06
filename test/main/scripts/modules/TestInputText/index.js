/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {InputText} from '../../../../src/index'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testInputValue: 'tan',
    }
  }

  _onTestInputChange(value, name) {
    console.log(value)
    var newState = {};
    if(name === 'myInput') {
      newState.testInputValue = value;
    }
    this.setState(newState);
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <InputText id = {1234} readOnly={true} name={"myInput"} hide={this.state.hide} value={this.state.testInputValue} onChangeValue={this._onTestInputChange.bind(this)} className='form-control'/>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
