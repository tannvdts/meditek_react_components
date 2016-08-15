/**
 * Created by tannguyen on 05/08/2016.
 */
import React, {Component, PropTypes} from 'react'
class Modal extends Component {

  constructor(props) {
    super(props)
    this.state={
    }
  }
  componentDidMount(){
    var self = this;
    if(this.props.onShow) {
      $(this.refs['modal']).on('show.bs.modal', function (e) {
        self.props.onShow(e);
      })
    };
    if(this.props.onShown) {
      $(this.refs['modal']).on('shown.bs.modal', function (e) {
        self.props.onShown(e);
      })
    };
    if(this.props.onHide) {
      $(this.refs['modal']).on('hide.bs.modal', function (e) {
        self.props.onHide(e);
      })
    };
    if(this.props.onHidden) {
      $(this.refs['modal']).on('hidden.bs.modal', function (e) {
        self.props.onHidden(e);
      })
    };
    if(this.props.onLoaded) {
      $(this.refs['modal']).on('loaded.bs.modal', function (e) {
        self.props.onLoaded(e);
      })
    };
  }

  action(name, options) {
    switch (name) {
      case 'show':
            $(this.refs['modal']).modal('show');
            break;
      case 'hide':
            $(this.refs['modal']).modal('hide');
            break;
      case 'toggle':
            $(this.refs['modal']).modal('toggle');
            break;
      case 'handleUpdate':
            $(this.refs['modal']).modal('handleUpdate');
            break;
      case 'options':
            $(this.refs['modal']).modal(options);
            break;
    }
  }

  render(){
    const  {style, className, tabIndex, size, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }
    return  <div
              ref="modal"
              {...other}
              className={"modal fade " + (className?className:'')}
              style={styleMix}
              tabIndex={tabIndex}
              role="dialog"
              aria-labelledby="meditekModal"
             >
              <div className={"modal-dialog "+ (size?size:'')} role="document">
                <div className="modal-content">
                  {this.props.children}
                </div>
              </div>
            </div>
  }
}
Modal.propTypes = _.assignIn({}, {
  className: PropTypes.string,
  style: PropTypes.object,
  tabIndex: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  size: PropTypes.string, //null, modal-lg, modal-sm,
  onShow: PropTypes.func,
  onShown: PropTypes.func,
  onHide: PropTypes.func,
  onHidden: PropTypes.func,
  onLoaded: PropTypes.func
})
Modal.defaultProps = {
  style: {},
  tabIndex: -1,
  size: null
}
export default Modal
