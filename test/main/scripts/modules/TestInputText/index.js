/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import InputText from '../../../../src/components/inputText'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testInputValue: 'tan',
    }
  }

  _onTestInputChange(value) {
    console.log(value)
    this.setState({
      testInputValue:value
    })
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <InputText id = {1234} hide={this.state.hide} value={this.state.testInputValue} onChangeValue={this._onTestInputChange.bind(this)} className='form-control'/>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
