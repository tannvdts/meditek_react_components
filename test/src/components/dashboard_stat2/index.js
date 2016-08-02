import React, {Component, PropTypes} from 'react'

class Dashboard_stat2 extends Component {
	getDefaultProps(){
		return {
			icon: "glyphicon glyphicon-search",
			more: "progress",
			color: "blue-sharp",
			progress: "100%",
		}
	}
	componentDidMount(){
		$(this.refs.title).addClass("font-"+this.props.color);
		$(this.refs.progress).addClass(this.props.color);
	}
	_onClick(){
		// history.push(this.props.link);
	}
	render(){
		return (
			<div className="dashboard-stat2 bordered" onClick={this.onClick}>
                <div className="display">
                    <div className="number">
                        <h3 className="" ref="title">
                            <span data-counter="counterup" data-value="567">{this.props.number}</span>
                        </h3>
                        <small>{this.props.desc}</small>
                    </div>
                    <div className="icon"><i className={this.props.icon}></i></div>
                </div>
                <div className="progress-info">
                    <div className="progress">
                        <span style={{"width":this.props.progress}} className="progress-bar progress-bar-success" ref="progress">
                            <span className="sr-only">{this.props.progress} {this.props.more}</span>
                        </span>
                    </div>
                    <div className="status">
                        <div className="status-title"> {this.props.more} </div>
                        <div className="status-number"> {this.props.progress} </div>
                    </div>
                </div>
            </div>
		);
	}
}
Dashboard_stat2.propTypes = {
  number: PropTypes.string,
  desc: PropTypes.string,
  icon: PropTypes.string,
  more: PropTypes.string,
  progress: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
}
export default Dashboard_stat2
