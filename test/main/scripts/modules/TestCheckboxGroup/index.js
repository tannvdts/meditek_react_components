/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {CheckboxGroup, Checkbox} from '../../../../src/components/checkboxGroup'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testCheckboxGroupSelectedValues: ['apple'],
    }
  }

  _onTestCheckboxGroupChange(values) {
    this.setState({
      testCheckboxGroupSelectedValues:values
    })
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <CheckboxGroup name={"fruit"}
                  value={this.state.testCheckboxGroupSelectedValues}
                  onChangeValue={this._onTestCheckboxGroupChange.bind(this)}
      >
        <label className="checkbox-inline">
          <Checkbox value="apple" />Apple
        </label>
        <label className="checkbox-inline">
          <Checkbox value="orange" />Orange
        </label>
        <label className="checkbox-inline">
          <Checkbox value="watermelon" />Watermelon
        </label>
      </CheckboxGroup>

    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
