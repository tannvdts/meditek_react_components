/**
 * Created by tannguyen on 03/08/2016.
 */
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
import {RadioGroup} from 'react-radio-group'
class RadioGroupCustom extends Component {

  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
  }

  _onChange(value) {
    console.log("RadioGroup Component: _onChange:", value);
    if(typeof this.props.onChangeValue !== 'undefined') {
      this.props.onChangeValue(value);
    }
  }

  render(){
    var { style, value, onChangeValue, ...other } = this.props;
    var styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }
    return  <RadioGroup
              {...other}
              style={styleMix}
              selectedValue={value}
              onChange={this._onChange.bind(this)}
            >
              {this.props.children}
            </RadioGroup>

  }
}
RadioGroupCustom.propTypes = _.assignIn({}, mixins.inputPropTypes, {

})
RadioGroupCustom.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {}
}
export default RadioGroupCustom
