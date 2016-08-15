/**
 * Created by tannguyen on 04/08/2016.
 */
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onChange(e) {
    console.log(e.target.options);
    if(typeof this.props.onChangeValue === 'undefined') return;
    if(this.props.multiple === true) {
      var values = [];
      var options = e.target.options;
      for(var i = 0; i < options.length; i++) {
        if(options[i].selected) {
          values.push(options[i].value);
        }
      }
      this.props.onChangeValue(values, this.props.name);
      console.log("Select Component: _onChange:", values);
    } else {
      this.props.onChangeValue(e.target.value, this.props.name);
      console.log("Select Component: _onChange:", e.target.value)

    }

  }

  render() {
    var { style, onChangeValue, options, ...other } = this.props;
    var styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }
    let optionElements = [];
    optionElements = options.map((item, index) => {
      return <option key={index} value={item.value}>{item.name}</option>
    })
    return (
        <select ref="input"
                {...other}
                style={styleMix}
                onChange={this._onChange.bind(this)}>
          {this.props.children}
          {optionElements}
        </select>
    )
  }
}

Select.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  multiple: PropTypes.bool,
  options: PropTypes.array,
  defaultValue: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.array
  ]),
  value: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.array
  ]),
});
Select.defaultProps = {
  multiple: false,
  hide: false,
  disabled: false,
  readOnly: false,
  style: {}
}
export default Select
