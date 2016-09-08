/**
 * Created by tannguyen on 15/08/2016.
 */
//https://github.com/ziad-saab/react-checkbox-group
//https://www.npmjs.com/package/react-checkbox-group
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
import {Checkbox} from 'react-checkbox-group'
class CheckboxCustom extends Component {

  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
  }


  render(){
    var { style, onChangeValue, hide, ...other } = this.props;
    var styleMix = _.assignIn({}, style);
    if (hide == true) {
      styleMix.display = 'none'
    }
    return  <Checkbox
      {...other}
      style={styleMix}
    />

  }
}
CheckboxCustom.propTypes = _.assignIn({}, mixins.inputPropTypes, {

})
CheckboxCustom.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {}
}
export default CheckboxCustom
