import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
class FileInput extends Component {

  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.files)
    $(this.refs.inputFile).prop({
      files: nextProps.files
    })
    console.log("FileInput Component:componentWillReceiveProps", $(this.refs.inputFile).prop("files"));
  }

  _onChange(e) {
    console.log("FileInput Component: _onChange", e.target.files);
    if(this.props.onChangeValue) {
      this.props.onChangeValue(e.target.files);
    }
  }

  render(){
    const  {style, onChangeValue, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }

    return  <input type="file"
              {...other}
               ref="inputFile"
               style={styleMix}
               onChange={this._onChange.bind(this)}
            />;
  }
}
FileInput.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  multiple: PropTypes.bool
})
FileInput.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {},
  multiple: false
}
export default FileInput
