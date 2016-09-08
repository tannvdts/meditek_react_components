/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Select} from '../../../../src/index'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testSelect: 1,
    }
  }

  _onTestSelectChange(value, name) {
    console.log("TestSelect: change:", value);
    var newState = {};
    if(name ==='mySelect') {
      newState.testSelect = value;
    }
    this.setState(newState);
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    var options = [
      {type:'optgroup', name: 'group test', items:[
        {type:'option', name: 'item test 1', value: 11},
        {type:'option', name: 'item test 2', value: 22},
      ]},
      {type:'option', name: 'item 1', value: 1},
      {type:'option', name: 'item 2', value: 2},
      {type:'option', name: 'item 3', value: 3},
      {type:'option', name: 'item 4', value: 4},
    ]
    return (
      <Select id = {1234}
              readOnly={true}
              name = "mySelect"
              hide={this.state.hide}
              value={this.state.testSelect}
              onChangeValue={this._onTestSelectChange.bind(this)}
              className='form-control' options={options}>
        <option value={null}></option>
      </Select>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
