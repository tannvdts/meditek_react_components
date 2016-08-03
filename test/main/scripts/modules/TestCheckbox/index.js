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
      testCheckboxValue: 'YES',
    }
  }

  _onTestCheckboxChange(value) {
    console.log("Test: _onTestCheckboxChange:", value);
    this.setState({
      testCheckboxValue: value
    })
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <Checkbox
        id = {1234}
        hide={this.state.hide}
        value={this.state.testCheckboxValue}
        trueValue="YES"
        falseValue="NO"
        onChangeValue={this._onTestCheckboxChange.bind(this)}/>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
