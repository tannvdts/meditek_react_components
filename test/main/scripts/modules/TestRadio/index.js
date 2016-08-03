/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import RadioGroup from '../../../../src/components/radio2/RadioGroup'
import Radio from '../../../../src/components/radio2/Radio'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      selectedValue: 'apple',
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
      <RadioGroup name="fruit">
        <Radio value="apple" />Apple
        <Radio value="orange" />Orange
        <Radio value="watermelon" />Watermelon
      </RadioGroup>

    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
