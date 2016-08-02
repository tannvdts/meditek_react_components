import React, {Component, PropTypes} from 'react'
class Dropdown extends Component {
	getDefaultProps(){
		return {
			className: "",
			defaultValue: "",
			multiple: false,
			disabled: false,
			required: false,
			size: 1,
			data: [
				{value: "", name: ""},
			],
			className: "col-lg-3 col-md-3",
            labelWidth: "col-lg-8 col-md-8",
		};
	}
	componentDidMount(){
		if (this.props.type == 2) {
            $(this.refs.labelWidth).addClass(this.props.labelWidth);
            $(this.refs.inputWidth).addClass(this.props.inputWidth);
        }
	}
	_setArrayData(data) {
		this.props.data = data;
		this.forceUpdate();
	}
	_setValue(value){
		$(this.refs.select).val(value);
	}
	_getValue(){
		return $(this.refs.select).val();
	}
	_onChange() {
		if(typeof this.props.onChange !== 'undefined') {
			this.props.onChange(this.refs.formGroup, this.refs.message);
		}
	}
	_show(){
		$(this.refs.formGroup).show();
	}
	_hide(){
		$(this.refs.formGroup).hide();
	}
	render(){
		var id = this.props.id ? this.props.id : 'dropdown'
		var required = this.props.required == true ? <span className="required"> * </span> : '';
		var help_block = this.props.required == true ? <span className="help-block"> Provide your {this.props.label} </span> : '';
		var option = this.props.data.map(function(d, index){
			return <option key={index} value={d.value}>{d.name}</option>;
		});
		var r0 =
			<select className="form-control" 
				id={id}
				name={this.props.name} ref="select"
				multiple={this.props.multiple} 
				disabled={this.props.disabled}
				required={this.props.required}
				size={this.props.size}
				defaultValue={this.props.defaultValue}
				onChange={this.onChange}>
					{option}
			</select>;
		var r1 = 
			<div className="form-group" id={id} ref="formGroup">
				<label className="control-label">{this.props.label} {required}</label>
				<select className="form-control" 
					name={this.props.name} ref="select"
					multiple={this.props.multiple} 
					disabled={this.props.disabled}
					required={this.props.required}
					size={this.props.size}
					defaultValue={this.props.defaultValue}
					onChange={this.onChange}>
						{option}
				</select> {help_block}
			</div>;
		var r2 = 
			<div className="form-group" id={id} ref="formGroup">
				<label className="control-label" ref="labelWidth">{this.props.label} {required}</label>
				<div ref="inputWidth">
					<select className="form-control"
						name={this.props.name} ref="select"
						multiple={this.props.multiple} 
						disabled={this.props.disabled}
						required={this.props.required}
						size={this.props.size}
						defaultValue={this.props.defaultValue}
						onChange={this._onChange.bind(this)}>
							{option}
					</select> {help_block}
				</div>
			</div>;
		if (this.props.type == 2) return r2;
		if (this.props.type == 0) return r0;
		return r1;
	}
}
Dropdown.propTypes =  {
  type: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  data: PropTypes.array,
  defaultValue: PropTypes.string,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.number,
  labelWidth: PropTypes.string,
  inputWidth: PropTypes.string,
  id: PropTypes.string,
}
export default Dropdown
