/**
 * Created by tannguyen on 03/08/2016.
 */
//https://github.com/ziad-saab/react-checkbox-group
//https://www.npmjs.com/package/react-checkbox-group
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
import {CheckboxGroup} from 'react-checkbox-group'
class CheckboxGroupCustom extends Component {

  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
  }

  _onChange(values) {
    if(this.props.readOnly) return;
    console.log("RadioGroup Component: _onChange:", values);
    if(typeof this.props.onChangeValue !== 'undefined') {
      this.props.onChangeValue(values, this.props.name);
    }
  }

  getValue() {
    return this.props.value;
  }

  render(){
    var { style, value, onChangeValue, hide, ...other } = this.props;
    var styleMix = _.assignIn({}, style);
    if (hide == true) {
      styleMix.display = 'none'
    }
    return  <CheckboxGroup
      {...other}
      style={styleMix}
      value={value}
      onChange={this._onChange.bind(this)}
    >
      {this.props.children}
    </CheckboxGroup>

  }
}
CheckboxGroupCustom.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  value: PropTypes.array
})
CheckboxGroupCustom.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {}
}
export default CheckboxGroupCustom
