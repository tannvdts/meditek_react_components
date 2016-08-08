/**
 * Created by tannguyen on 05/08/2016.
 */
import React, {Component, PropTypes} from 'react'
class ModalBody extends Component {

  constructor(props) {
    super(props)
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){
    const  {style, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }
    return  <div
              {...other}
              className={"modal-body " + (this.props.className?this.props.className:'')}
              style={styleMix}
            >
              {this.props.children}
            </div>
  }
}
ModalBody.propTypes = _.assignIn({}, {
  className: PropTypes.string,
  style: PropTypes.object,
  hide: PropTypes.bool
})
ModalBody.defaultProps = {
  style: {},
  hide: false
}
export default ModalBody
