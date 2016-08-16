/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {RadioGroup} from '../../../../src/index'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testRadioSelectedValue: 'apple',
    }
  }

  _onTestRadioChange(value, name) {
    var newState = {};
    if(name === 'fruit') {
      newState.testRadioSelectedValue = value;
    }
    this.setState(newState);
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <RadioGroup.Group name={"fruit"}
                  value={this.state.testRadioSelectedValue}
                  onChangeValue={this._onTestRadioChange.bind(this)}
      >
        <label className="checkbox-inline">
          <RadioGroup.Radio value="apple" />Apple
        </label>
        <label className="checkbox-inline">
          <RadioGroup.Radio value="orange" />Orange
        </label>
        <label className="checkbox-inline">
          <RadioGroup.Radio value="watermelon" />Watermelon
        </label>
      </RadioGroup.Group>

    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
