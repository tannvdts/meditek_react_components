/**
 * Created by tannguyen on 04/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import Textarea from '../../../../src/components/textarea'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testTextarea: 'tan \n 123 \n 545',
    }
  }

  _onTestTextareaChange(value, name) {
    console.log("TestTextarea:_onTestTextareaChange", value)
    var newState = {};
    if(name === 'myTextArea') {
      newState.testTextarea = value;
    }
    this.setState(newState);
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <Textarea id = {1234}
                name="myTextArea"
                hide={this.state.hide}
                value={this.state.testTextarea}
                onChangeValue={this._onTestTextareaChange.bind(this)}
                className='form-control' rows={6}/>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
