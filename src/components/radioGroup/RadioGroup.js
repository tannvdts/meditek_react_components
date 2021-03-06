/**
 * Created by tannguyen on 03/08/2016.
 */
//https://www.npmjs.com/package/react-radio-group
//https://github.com/chenglou/react-radio-group
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
    if(this.props.readOnly) return;
    console.log("RadioGroup Component: _onChange:", value);
    if(typeof this.props.onChangeValue !== 'undefined') {
      this.props.onChangeValue(value, this.props.name);
    }
  }

  getValue() {
    return this.props.value;
  }

  render(){
    var { style, value, onChangeValue, hide,  ...other } = this.props;
    var styleMix = _.assignIn({}, style);
    if (hide == true) {
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
