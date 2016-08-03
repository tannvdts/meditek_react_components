import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'

class Checkbox extends Component {
    constructor (props) {
      super(props);
      this.state = {};
    }

    _onChange(e){
        if(this.props.onChangeValue)
            this.props.onChangeValue(e.target.checked);
    }

    render() {
        const {style, isChecked, onChangeValue, ...other} = this.props;
        var styleMix = _.assignIn({}, style);
        if (this.props.hide == true) {
          styleMix.display = 'none'
        }
        return <input  type="checkbox"
                ref="input"
                {...other}
                style={styleMix}
                checked={isChecked}
                onChange={this._onChange.bind(this)}/>

    }
}

Checkbox.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  isChecked: PropTypes.bool
})
Checkbox.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  isChecked: false,
  style: {}
}


export default Checkbox
