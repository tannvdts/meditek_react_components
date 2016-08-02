import React, {Component, PropTypes} from 'react'
class Datepicker extends Component {
	getDefaultProps(){
		return {
			type: 1,
			className: "col-lg-3 col-md-3",
            labelWidth: "col-lg-8 col-md-8",
		};
	}
	componentDidMount(){
		var self = this;
		$(this.refs.datepicker).datepicker({
			// rtl: App.isRTL(),
			orientation: "left",
			format:'dd/mm/yyyy',
			startDate: this.props.startDate,
			autoclose: !0,
		}).on("changeDate", function(){
			if(typeof self.props.onChange !== 'undefined') {
				self.props.onChange(self.refs.formGroup, self.refs.message);
			}
		});

		if (this.props.type == 2) {
            $(this.refs.labelWidth).addClass(this.props.labelWidth);
            $(this.refs.inputWidth).addClass(this.props.inputWidth);
        }
	}
	_setValue(value){
		$(this.refs.datepicker).datepicker("setDate", value);
	}
	_getValue(){
		return $(this.refs.datepicker).val();
	}
	_onChange() {
		if(typeof this.props.onChange !== 'undefined') {
			this.props.onChange(this.refs.formGroup, this.refs.message);
		}
	}
	render(){
		var id = this.props.id ? this.props.id : 'datepicker'
		var required = this.props.required == true ? <span className="required"> * </span> : '';
		var help_block = this.props.required == true ? <span className="help-block"> Provide your {this.props.label} </span> : '';
		var r0 = 
			<input type="text" 
				name={this.props.name}
				className="form-control" 
				placeholder="dd/mm/yyyy"
				readOnly="true"
				required={this.props.required}
				ref="datepicker"/>;
		var r1 = 
			<div className="form-group" ref="formGroup" id={id}>
				<label className="control-label" ref="labelWidth">{this.props.label} {required}</label>
				<input type="text" 
					name={this.props.name}
					className="form-control" 
					ref="datepicker"
					placeholder="dd/mm/yyyy"
					required={this.props.required}
					readOnly="true"
					onChange={this._onChange.bind(this)} /> {help_block} <span ref="message" className="hide-element" style={{color:"#e73d4a"}}></span>
			</div>;
		var r2 = 
			<div className="form-group" ref="formGroup" id={id}>
				<label className="control-label" ref="labelWidth" ref="labelWidth">{this.props.label} {required}</label>
				<div ref="inputWidth">
					<input type="text" 
						name={this.props.name}
						className="form-control" 
						ref="datepicker"
						placeholder="dd/mm/yyyy"
						required={this.props.required}
						readOnly="true"
						onChange={this._onChange.bind(this)} /> {help_block} <span ref="message" className="hide-element" style={{color:"#e73d4a"}}></span>
				</div>
			</div>;

		if (this.props.type == 2) return r2;
		if (this.props.type == 0) return r0;
		return r1;
	}
}
Datepicker.propTypes = {
  type: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  labelWidth: PropTypes.string,
  inputWidth: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
}
export default Datepicker
