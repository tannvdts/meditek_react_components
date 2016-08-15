/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import DatePicker from '../../../../src/components/datepicker'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testDatePickerValue: null,
    }
  }

  _onTestDatePickerChange(value) {
    console.log("_onTestDatePickerChange:", value)
    this.setState({
      testDatePickerValue:value
    })
  }

  componentWillMount() {
    this.datePickerOptions= {
      rtl: App.isRTL(),
      orientation: "left",
      format:'dd/mm/yyyy',
      startDate: '-3d', //curent date
      autoclose: !0,
      clearBtn: true
    }
  }

  componentDidMount() {
    var self = this;
    var selectedDate = new Date();
    // Mo phong bat dong bo
    //----------------------------------
    setTimeout(function(selectedDate){
      self.setState({
        testDatePickerValue:selectedDate
      })
    }, 1000, selectedDate)
  }

  render() {
    return (
      <DatePicker datePickerOptions={this.datePickerOptions}
                  id = {1234}
                  hide={this.state.hide}
                  onChangeValue={this._onTestDatePickerChange.bind(this)}
                  className='form-control'
                  value = {this.state.testDatePickerValue}
      />
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
