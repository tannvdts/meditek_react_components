/**
 * Created by tannguyen on 03/08/2016.
 */
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'

class Checkbox extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  _onChange(e){
    if(this.props.readOnly)
      return;
    if(this.props.onChangeValue) {
      var trueValueCal = this.props.trueValue!==undefined?this.props.trueValue:true;
      var falseValueCal =  this.props.falseValue!==undefined?this.props.falseValue:false;
      this.props.onChangeValue(e.target.checked?trueValueCal:falseValueCal, this.props.name);
    }
  }
  
  getValue() {
    return this.props.value;
  }
  
  getRef() {
    return this.refs['input']
  }

  render() {
    const {style, value, onChangeValue, trueValue, falseValue, hide, ...other} = this.props;
    let trueValueCal = trueValue!==undefined?trueValue:true;
    let isChecked =  value === trueValueCal?true:false;
    console.log("checkbox component:value:", value, ':checked:',isChecked);
    //custom style
    let styleMix = _.assignIn({}, style);
    if (hide == true) {
      styleMix.display = 'none'
    }
    //------------------------------------
    return <input  type="checkbox"
                   ref="input"
                  {...other}
                   style={styleMix}
                   checked={isChecked}
                   onChange={this._onChange.bind(this)}/>

  }
}

Checkbox.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  value: mixins.customPropTypes.check,
  trueValue: mixins.customPropTypes.check,
  falseValue: mixins.customPropTypes.check
})
Checkbox.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {},
  trueValue: true,
  falseValue: false
}


export default Checkbox
