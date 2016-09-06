/**
 * Created by tannguyen on 04/08/2016.
 */
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
class Textarea extends Component {

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

  getValue() {
    return this.props.value;
  }

  render(){
    const  {style, onChangeValue, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }

    return  <textarea
              ref="input"
              {...other}
              style={styleMix}
              onChange={this._onChange.bind(this)}
            />
  }
}
Textarea.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  rows: PropTypes.number,
})
Textarea.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {}
}
export default Textarea
