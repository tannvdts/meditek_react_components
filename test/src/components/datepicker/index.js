//https://bootstrap-datepicker.readthedocs.io/en/latest/
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

	componentDidMount() {
		var self = this;
		$(this.refs.datepicker)
      .datepicker(this.props.datepickerOptions)
      .on("changeDate", function(e){
        console.log("DatePicker Component: changeDate:", e);
        if(self.props.onChangeValue) {
          self.props.onChangeValue(e.date);
        }
		});
	}


	render(){
    const {style, onChangeValue, value, ...other} = this.props;
    //Xu ly display
    let displayValue = null;
    if (value) {
      let fm = 'DD/MM/YYYY';
      if (this.props.datepickerOptions.format)
        fm = this.props.datepickerOptions.format.toUpperCase();
      displayValue = moment(value).format(fm);
    }
    //Xu ly style
    let styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }
    return <input type="text"
              {...other}
              style={styleMix}
              ref="datepicker"
              value = {displayValue}
            />
	}
}

DatePicker.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  datepickerOptions: PropTypes.object,
  value: PropTypes.object
});

DatePicker.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {},
  datepickerOptions: {
    rtl: App.isRTL(),
    orientation: "left",
    format:'dd/mm/yyyy',
    startDate: '-3d',
    autoclose: !0,
    clearBtn: true,
  }
}
export default DatePicker
