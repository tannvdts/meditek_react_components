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
		if(typeof this.props.onChangeValue !== 'undefined') {
      this.props.onChangeValue(e.target.value, this.props.name);
		}
	}

	render(){
    const  {style, onChangeValue, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }

    return <input type="text"
              {...other}
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
