import React, {Component, PropTypes} from 'react'
class Radio_icheck extends Component {
	getDefaultProps(){
		return {
			label: "",
		};
	}
	componentDidMount(){
		$(this.props.input).iCheck({
			radioClass: 'iradio_square-blue',
		});
	}
	render(){
		var html =
      <div>
        <input type="radio"
               name={this.props.name}
               value={this.props.value}
               className="icheck"
               checked={this.props.value == this.props.checked}
               ref="input"/> {this.props.label}
      </div>

		return null;
	}
}
Radio_icheck.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
}
export default Radio_icheck
