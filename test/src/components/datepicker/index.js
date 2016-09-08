//https://bootstrap-datepicker.readthedocs.io/en/latest/
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
class DatePicker2 extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  componentDidMount() {
    var self = this;
    $(this.refs.datepicker)
      .datepicker(self.props.datePickerOptions)
      .on("changeDate", function(e){
        console.log("DatePicker Component: changeDate:", e);
      })
      .on("hide", function(e) {
        console.log("DatePicker Component: Hide:", e);
        var choseDate = null;
        if(e.date) {
          choseDate = moment(e.date)
            .format(self.props.datePickerOptions.format.toUpperCase());
        }
        
        console.log(">>", choseDate);
        if(self.props.onChangeValue) {
          self.props.onChangeValue(choseDate, self.props.name);
        }
      })
  }

  _onChange(e) {
    console.log("DatePicker Component: _onChange:", e);
    if(this.props.onChangeValue) {
      this.props.onChangeValue(e.target.value, this.props.name);
    }
  }

  getValue() {
    return this.props.value;
  }
  
  getRef() {
    return this.refs['datepicker'];
  }

  render(){
    const {style, onChangeValue, value, hide, datePickerOptions, ...other} = this.props;
    //Xu ly style
    let styleMix = _.assignIn({}, style);
    if (hide == true) {
      styleMix.display = 'none'
    }
    return  <input type="text"
               {...other}
               style={styleMix}
               ref="datepicker"
               value = {value}
               onChange={this._onChange.bind(this)}
           />

  }
}

DatePicker2.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  datePickerOptions: PropTypes.object,
  value: PropTypes.string
});

DatePicker2.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {},
  datePickerOptions: {
    orientation: "left",
    format:'dd/mm/yyyy',
    autoclose: !0,
    clearBtn: true,
  },
  value: ''
}
export default DatePicker2
