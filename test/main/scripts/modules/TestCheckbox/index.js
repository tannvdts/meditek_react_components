/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import Checkbox from '../../../../src/components/checkbox'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testCheckboxChecked: false
    }
  }

  _onTestCheckboxChange(value) {
    console.log(!this.state.testCheckboxChecked)
    this.setState({
      testCheckboxChecked: !this.state.testCheckboxChecked
    })
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <Checkbox id = {1234} hide={this.state.hide} isChecked= {this.state.testCheckboxChecked} onChangeValue={this._onTestCheckboxChange.bind(this)}/>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
