import React, {Component, PropTypes} from 'react'
class Timepicker extends Component {
	getDefaultProps(){
		return {
			data_default_time: "",
			className: "col-lg-3 col-md-3",
            labelWidth: "col-lg-8 col-md-8",
		};
	}
	componentDidMount(){
		var self = this;
		$(this.refs.timepicker).timepicker({
			autoclose: false,
            minuteStep: 1, // cach nhau bao nhieu phut
            showSeconds: false, //show giay
            showMeridian: false, // khong su dung kieu format AM PM
		}).on("change", function(){
		});

		if (this.props.type == 2) {
            $(this.refs.labelWidth).addClass(this.props.labelWidth);
            $(this.refs.inputWidth).addClass(this.props.inputWidth);
        }
	}
	_setValue(value){
		$(this.refs.timepicker).timepicker('setTime', value);
	}
	_getValue(){
		return $(this.refs.timepicker).val();
	}
	render(){
		var required = this.props.required == true ? <span className="required"> * </span> : '';
		var help_block = this.props.required == true ? <span className="help-block"> Provide your {this.props.label} </span> : '';

		var r0 =
			<input type="text" 
				name={this.props.name}
				className="form-control" 
				ref="timepicker"
				placeholder="hh:mm"
				required={this.props.required}
				data-default-time={this.props.data_default_time}
				readOnly="true" />
		// form group
		var r1 = 
			<div className="form-group">
				<label className="control-label">{this.props.label} {required}</label>
				<input type="text" 
					name={this.props.name}
					className="form-control" 
					ref="timepicker"
					placeholder="hh:mm"
					required={this.props.required}
					data-default-time={this.props.data_default_time}
					readOnly="true" /> {help_block}
			</div>;

		// form group inline
		var r2 =
			<div className="form-group">
				<label className="control-label" ref="labelWidth">{this.props.label} {required}</label>
				<div ref="inputWidth">
					<input type="text" 
						name={this.props.name}
						className="form-control" 
						ref="timepicker"
						placeholder="hh:mm"
						required={this.props.required}
						data-default-time={this.props.data_default_time}
						readOnly="true" /> {help_block}
				</div>
			</div>;
		if (this.props.type == 2) return r2;
		if (this.props.type == 0) return r0;
		return r1;
	}
}
Timepicker.propTypes = {
  type: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  data_default_time: PropTypes.string,
  required: PropTypes.bool,
  labelWidth: PropTypes.string,
  inputWidth: PropTypes.string,
}
export default Timepicker
