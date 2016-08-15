/**
 * Created by tannguyen on 08/08/2016.
 */
//https://jdewit.github.io/bootstrap-timepicker/
//https://www.npmjs.com/package/bootstrap-timepicker
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
import config from '../../config'
class TimePicker extends Component {

  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
    var self = this;
    $(this.refs['input']).timepicker(this.props.timepickerOptions)
    .on('show.timepicker', function(e) {
      console.log("on show.timepicker", e);
      if(self.props.onShow)
        self.props.onShow(e);
    })
    .on('hide.timepicker', function(e) {
      console.log("on hide.timepicker", e);
      if(self.props.onHide)
        self.props.onHide(e);
    })
    .on('changeTime.timepicker', function(e) {
      console.log("on changeTime.timepicker", e);
      if (self.props.onChangeValue)
      {
        if(self.props.timepickerOptions.showMeridian === false) {
          self.props.onChangeValue(e.time.hours+":"+config.pad(e.time.minutes,2)+":"+config.pad(e.time.seconds,2));
        } else {
          self.props.onChangeValue(e.time.hours+":"+config.pad(e.time.minutes,2)+":"+config.pad(e.time.seconds,2)+" "+e.time.meridian);
        }
      }
    })
  }

  _onChange(e) {
    if(typeof this.props.onChangeValue !== 'undefined') {
      this.props.onChangeValue(e.target.value);
    }
  }

  render(){
    const  {style, onChangeValue, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }

    return <input ref="input"
                  type="text"
                  {...other}
                  style={styleMix}
                  onChange={this._onChange.bind(this)}
            />

  }
}
TimePicker.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  timepickerOptions: PropTypes.object
})
TimePicker.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {},
  timepickerOptions: {
    template: 'dropdown',
    minuteStep: 15,
    secondStep: 15,
    defaultTime: 'current',
    showMeridian: false, //hien AM/PM hay khong
  }
}
export default TimePicker

