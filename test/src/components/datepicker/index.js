import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

	componentDidMount() {
		var self = this;
		$(this.refs.datepicker)
      .datepicker(this.props.datepickerOptions)
      .on("changeDate", function(e){
        console.log("changeDate:", e);
        if(self.props.onChangeValue) {
          self.props.onChangeValue(e.date);
        }
		});
	}


	render(){
    var {style, onChangeValue, value, ...other} = this.props;
    var displayValue = null;
    if (value) {
      displayValue = moment(value).format("DD/MM/YYYY");
    }
    return <input type="text"
              {...other}
              ref="datepicker"
              value = {displayValue}
            />
	}
}

Datepicker.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  datepickerOptions: PropTypes.object,
  value: PropTypes.object
});

Datepicker.defaultProps = {
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
  }
}
export default Datepicker
