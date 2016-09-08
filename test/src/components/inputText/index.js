import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
class InputText extends Component {

  constructor(props) {
    super(props)
    this.state={}
  }
	componentDidMount(){
	}

	_onChange(e) {
    if(this.props.readOnly) return;
		if(typeof this.props.onChangeValue !== 'undefined') {
      this.props.onChangeValue(e.target.value, this.props.name);
		}
	}
  
  getValue() {
    return this.props.value;
  }

	render(){
    const  {style, onChangeValue, hide, readOnly, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (hide == true) {
      styleMix.display = 'none'
    }

    return <input type="text"
              {...other}
              readOnly={readOnly}
               style={styleMix}
               ref="input"
               onChange={this._onChange.bind(this)}/>

	}
}
InputText.propTypes = _.assignIn({}, mixins.inputPropTypes, {

})
InputText.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {}
}
export default InputText
