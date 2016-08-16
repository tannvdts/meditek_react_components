/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {CheckboxGroup} from '../../../../src/index'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testCheckboxGroupSelectedValues: ['apple'],
    }
  }

  _onTestCheckboxGroupChange(values, name) {
    var newState = {};
    if(name === 'fruit') {
      newState.testCheckboxGroupSelectedValues = values;
    }
    this.setState(newState);
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <CheckboxGroup.Group name={"fruit"}
                  value={this.state.testCheckboxGroupSelectedValues}
                  onChangeValue={this._onTestCheckboxGroupChange.bind(this)}
      >
        <label className="checkbox-inline">
          <CheckboxGroup.Checkbox value="apple" />Apple
        </label>
        <label className="checkbox-inline">
          <CheckboxGroup.Checkbox value="orange" />Orange
        </label>
        <label className="checkbox-inline">
          <CheckboxGroup.Checkbox value="watermelon" />Watermelon
        </label>
      </CheckboxGroup.Group>

    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
