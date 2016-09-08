/**
 * Created by tannguyen on 08/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {ModalComp, TimePicker} from "../../../../src/index"
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testTimePicker: ''
    }
  }

  componentWillMount() {
    this.timepickerOptions=
    {
      template: 'dropdown',
      minuteStep: 15,
      secondStep: 15,
      defaultTime: 'current',
      showMeridian: true, //hien AM/PM hay khong
      //--------------------
      showSeconds:true,
      //modalBackdrop:true
    }

  }
  _onShow(e) {
    console.log("_onShow", e);
  }
  _onHide(e) {
    console.log("_onHide", e);
  }
  _onChangeTime(e) {
    console.log("_onChangeTime", e);
  }

  _onTestTimePickerChange(value, name) {
    console.log("_onTestTimePickerChange", value);
    var newState = {};
    if(name==='myTimePicker') {
      newState.testTimePicker = value;
    }
    this.setState(newState);
  }


  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <div className="input-group bootstrap-timepicker timepicker">
        <TimePicker id = {1234}
                    name="myTimePicker"
                    readOnly={true}
                    hide={this.state.hide}
                    value={this.state.testTimePicker}
                    className='form-control'
                    timepickerOptions={this.timepickerOptions}
                    onShow={this._onShow.bind(this)}
                    onHide={this._onHide.bind(this)}
                    onChangeValue={this._onTestTimePickerChange.bind(this)}
        />
        <span className="input-group-addon"><i className="glyphicon glyphicon-time"></i></span>
      </div>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
