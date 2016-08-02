import React, {Component, PropTypes} from 'react'
class Modal extends Component {
    getDefaultProps(){
        return {
            size: "md",
        };
    }
    componentDidMount(){
        $('.modal').addClass('bs-example-modal-'+this.props.size);
        $('.modal-dialog').addClass('modal-'+this.props.size);
    }
    _hide(){
        if(typeof this.props.onClose !== 'undefined'){
            this.props.onClose();
        }
        $(this.refs.modal).modal('hide');
    }
    _show(){
        $(this.refs.modal).modal('show');
    }
    _onSubmit(){
        if(typeof this.props.onSubmit !== 'undefined'){
            this.props.onSubmit();
        }
    }
    render(){
        return (
            <div className="modal fade" tabIndex="-1" role="dialog" ref="modal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form className="form">
                            <div className="form-body">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title bold uppercase font-blue-sharp" id="myModalLabel">{this.props.title}</h4>
                                </div>
                                <div className="modal-body">
                                    {this.props.children}
                                </div>
                            </div>
                            <div className="form-actions right" style={{background:"#efefef"}}>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" onClick={this.hide}>
                                        <i className="glyphicon glyphicon-arrow-left"></i> Cancel</button>
                                    <button type="submit" className="btn blue-sharp" onClick={this.onSubmit}>
                                        Submit <i className="glyphicon glyphicon-save"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
Modal.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
}
export default Modal
