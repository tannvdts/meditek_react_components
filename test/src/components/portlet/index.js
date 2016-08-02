import React, {Component, PropTypes} from 'react'
class Portlet extends Component {
	getDefaultProps(){
		return {
			caption_subject: "",
			caption_helper: "",
			caption_icon: "icon-list",
			type: "light",
			color: "blue-madison",
			form: "",
		}
	}
	componentDidMount(){
		if(this.props.type == 'box'){
			$(this.refs.portlet).addClass(this.props.type+" "+this.props.color);
		}
		if(this.props.type == 'light'){
			$(this.refs.portlet).addClass(this.props.type+" bordered");
			$(this.refs.caption_icon).addClass("font-"+this.props.color);
			$(this.refs.caption_subject).addClass("font-"+this.props.color);
		}
		$(this.refs.caption_icon).addClass(this.props.caption_icon);
		$(this.refs.portlet_body).addClass(this.props.form);
	}
	_onCreate(){
		if(typeof this.props.onCreate !== 'undefined')
			this.props.onCreate();
	}
	_onFilter(){
		if(typeof this.props.onFilter !== 'undefined')
			this.props.onFilter();
	}
	_onToggleMenu(){
		if(typeof this.props.onToggleMenu !== 'undefined')
			this.props.onToggleMenu();
	}
	render(){
		var isCreate = this.props.isCreate == true
			?<a href="javascript:;" className="btn btn-circle btn-primary margin-right-10" onClick={this._onCreate}>
				<i className="fa fa-plus"></i>Create</a>:'';
		var isFilter = this.props.isFilter == true
			?<a href="javascript:;" className="btn btn-circle btn-default margin-right-10" onClick={this._onFilter}>
				<i className="fa fa-filter"></i>Filter</a>:'';
		var isToggleMenu = this.props.isToggleMenu == true
			?<a href="javascript:;" className="btn btn-circle btn-primary margin-right-10" onClick={this._onToggleMenu}>
				<i className="fa fa-th-list"></i> Toggle menu</a>:'';
		return (
			<div className="portlet light bordered" ref="portlet">
				<div className="portlet-title">
					<div className="caption caption-md">
						<i className="theme-font" ref="caption_icon"></i>
						<span className="caption-subject bold uppercase" ref="caption_subject">{this.props.caption_subject} </span>
						<span className="caption-helper">{this.props.caption_helper} </span>
					</div>
					<div className="actions">
						{isCreate}{isFilter}{isToggleMenu}
						<a className="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;"> </a>
                    </div>
				</div>
				<div className="portlet-body" ref="portlet_body">
					{this.props.children}
				</div>
			</div>
		);
	}
}
Portlet.propTypes = {
  caption_subject: PropTypes.string,
  caption_helper: PropTypes.string,
  caption_icon: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  form: PropTypes.string,
  isCreate: PropTypes.bool,
  onCreate: PropTypes.func,
  isFilter: PropTypes.bool,
  onFilter: PropTypes.func,
  isToggleMenu: PropTypes.bool,
  onToggleMenu: PropTypes.func,
}
export default Portlet
