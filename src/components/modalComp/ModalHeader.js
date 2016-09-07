/**
 * Created by tannguyen on 05/08/2016.
 */
import React, {Component, PropTypes} from 'react'
class ModalHeader extends Component {

  constructor(props) {
    super(props)
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){
    const  {style, hide, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (hide == true) {
      styleMix.display = 'none'
    }
    return  <div
              {...other}
              className={"modal-header " + (this.props.className?this.props.className:'')}
              style={styleMix}
            >
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" >{this.props.title}</h4>
              {this.props.children}
            </div>
  }
}
ModalHeader.propTypes = _.assignIn({}, {
  className: PropTypes.string,
  style: PropTypes.object,
  hide: PropTypes.bool,
  title: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ])
})
ModalHeader.defaultProps = {
  style: {},
  hide: false
}
export default ModalHeader
