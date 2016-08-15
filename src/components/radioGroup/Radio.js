/**
 * Created by tannguyen on 03/08/2016.
 */
//https://www.npmjs.com/package/react-radio-group
//https://github.com/chenglou/react-radio-group
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
import {Radio} from 'react-radio-group'
class RadioCustom extends Component {

  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
  }
  

  render(){
    var { style, onChangeValue, ...other } = this.props;
    var styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }
    return  <Radio
              {...other}
              style={styleMix}
            />

  }
}
RadioCustom.propTypes = _.assignIn({}, mixins.inputPropTypes, {

})
RadioCustom.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {}
}
export default RadioCustom
