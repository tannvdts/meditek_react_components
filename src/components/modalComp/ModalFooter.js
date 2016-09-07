/**
 * Created by tannguyen on 05/08/2016.
 */
import React, {Component, PropTypes} from 'react'
class ModalFooter extends Component {

  constructor(props) {
    super(props)
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){
    const  {style, haveCloseBtn, closeBtnLabel, hide, closeBtnClassName,  ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (hide == true) {
      styleMix.display = 'none'
    }

    let closeBtnStyle = {};
    if(haveCloseBtn === false) {
      closeBtnStyle.display = 'none'
    }
    return  <div
              {...other}
              className={"modal-footer " + (this.props.className?this.props.className:'')}
              style={styleMix}
            >
              <button type="button" style={closeBtnStyle} className={closeBtnClassName} data-dismiss="modal">{closeBtnLabel}</button>
              {this.props.children}
            </div>
  }
}
ModalFooter.propTypes = _.assignIn({}, {
  className: PropTypes.string,
  style: PropTypes.object,
  hide: PropTypes.bool,
  haveCloseBtn: PropTypes.bool,
  closeBtnClassName: PropTypes.string,
  closeBtnLabel: PropTypes.string
})
ModalFooter.defaultProps = {
  style: {},
  hide: false,
  haveCloseBtn: true,
  closeBtnClassName: 'btn btn-default',
  closeBtnLabel: 'Close'
}
export default ModalFooter
