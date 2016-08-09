/**
 * Created by tannguyen on 08/08/2016.
 */
//https://jdewit.github.io/bootstrap-timepicker/
//https://www.npmjs.com/package/bootstrap-timepicker
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
class TimePicker extends Component {

  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
    var self = this;
    $(this.refs['input']).timepicker(this.props.timepickerOptions);
    if(this.props.onShow) {
      $(this.refs['input']).timepicker().on('show.timepicker', function(e) {
        self.props.onShow(e);
      })
    }
    if(this.props.onHide) {
      $(this.refs['input']).timepicker().on('hide.timepicker', function(e) {
        self.props.onHide(e);
      })
    }
    if(this.props.onChangeValue) {
      $(this.refs['input']).timepicker().on('changeTime.timepicker', function(e) {
        console.log(e)
        if(self.props.timepickerOptions.showMeridian === false) {
          self.props.onChangeValue(e.time.hours+":"+e.time.minutes+":"+e.time.seconds);
        } else {
          self.props.onChangeValue(e.time.hours+":"+e.time.minutes+":"+e.time.seconds+" "+e.time.meridian);
        }
      })
    }
  }

  _onChange(e) {
    console.log(e);
    if(typeof this.props.onChangeValue !== 'undefined') {
      this.props.onChangeValue(e.target.value);
    }
  }

  render(){
    const  {style, onChangeValue, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    /*if (this.props.hide == true) {
      styleMix.display = 'none'
    }*/

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

