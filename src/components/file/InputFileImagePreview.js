/**
 * Created by tannguyen on 11/08/2016.
 */
import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
class InputFileImagePreview extends Component {

  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
  }

  render(){
    const  {style, file, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }
    let objectUrl = null;
    if(file) {
      objectUrl = URL.createObjectURL(file);
    }
    return <img
                  ref="image"
                  {...other}
                  src = {objectUrl}
                  style={styleMix}
            />

  }
}
InputFileImagePreview.propTypes = _.assignIn({}, {
  id: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  hide: PropTypes.bool,
  file: PropTypes.object
})
InputFileImagePreview.defaultProps = {
  hide: false,
  style: {}
}
export default InputFileImagePreview
