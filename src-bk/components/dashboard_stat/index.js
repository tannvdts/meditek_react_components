import React, {Component, PropTypes} from 'react'
class Dashboard_stat extends Component{
	getDefaultProps(){
		return {
			icon: "fa fa-gear",
			more: "view",
			color: "blue-madison",
		}
	}
	componentDidMount(){
		$(this.refs.dashboard).addClass(this.props.color);
	}
	_onClick(){
	}
	render(){
		return (
			<div className="dashboard-stat" ref="dashboard" onClick={this.onClick}>
                <div className="visual">
                    <i className={this.props.icon}></i>
                </div>
                <div className="details">
                    <div className="number">{this.props.number}</div>
                    <div className="desc">{this.props.desc}</div>
                </div>
                <a className="more" href="javascript:;">
                    {this.props.more} <i className="m-icon-swapright m-icon-white"></i>
                </a>
            </div>
		);
	}
}
Dashboard_stat.propTypes = {
  number: PropTypes.string,
  desc: PropTypes.string,
  icon: PropTypes.string,
  more: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
}
export default Dashboard_stat
