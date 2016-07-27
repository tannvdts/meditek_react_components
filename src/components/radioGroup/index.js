import React, {Component, PropTypes} from 'react'
class RadioGroup extends Component {
	constructor(){
		super();
		// console.log(this);
		this.state = {};
		this.state.value = '';
	}
	getDefaultProps(){
        return {
            className: "radio",
            data: [
            	{value: 'Y', label: 'Yes'},
            	{value: 'N', label: 'No'},
            ],
            required: false,
            type: 1,
            labelWidth: "col-lg-3 col-md-3",
            inputWidth: "col-lg-9 col-md-9",
        };
    }
	componentDidMount(){
		var self = this;
		$('.iCheck').iCheck({
		    radioClass: 'iradio_square-blue',
		    increaseArea: '20%' // optional
		});
		$('.iCheck').on('ifChanged', function(e){
			self.state.value = e.target.value;
			if(typeof self.props.onChange !== 'undefined'){
            	self.props.onChange(e.target.value);
			}
			if(typeof self.props.onClick !== 'undefined'){
            	self.props.onClick(self.refs.formGroup, self.refs.message);
			}
		});

		if (this.props.type == 2) {
            $(this.refs.labelWidth).addClass(this.props.labelWidth);
            $(this.refs.inputWidth).addClass(this.props.inputWidth);
        }
	}
	_setCheck(key){
		$(this.refs[key]).iCheck('check');
	}
	_setValue(value){
		this.state.value = value;
		$(this.refs.input).val(value);
		this._setCheck(value.toLowerCase());
	}
	_getValue(){
		return this.state.value;
	}
	_onClick(value){
		this.state.value = value;
		console.log("clicked");
		if(typeof this.props.onClick !== 'undefined') {
			this.props.onClick();
		}
	}
	_onChange(value) {
		console.log("changed");
		if(typeof this.props.onChange !== 'undefined') {
			this.props.onChange();
		}
	}
	render(){
		var self = this;
		var name = this.props.name ? self.props.name : 'radio'
		var className = this.props.className ? this.props.className : 'radio'
		var radio_list = this.props.data.map((radio,index) => {
            const checked = radio.value === self.props.checked;

			return (
				<label className={className} key={index}>
	                <input 
	                	key={index}
	                	type="radio" 
	                	name={name} 
	                	className="iCheck"
	                	ref={radio.value}
	                	value={radio.value}
	                	checked={checked}
	                	onChange={this._onChange.bind(this, radio.value)}
	                	onClick={this._onClick.bind(this,radio.value)}/> {radio.label}
	            </label>
			);
		});
		var required = this.props.required == true ? <span className="required"> * </span> : '';
        var help_block = this.props.required == true ? <span className="help-block"> Provide your {this.props.label} </span> : '';
		var r1 =
			<div className="form-group" ref="formGroup">
				<label className="control-label">{this.props.label} {required}</label>
				<div className="radio-list">
					{radio_list} {help_block} <span ref="message" className="hide-element" style={{color:"#e73d4a"}}></span>
				</div>
			</div>;
		var r2 =
			<div className="form-group" ref="formGroup">
				<label className="control-label" ref="labelWidth">
					{this.props.label} {required}
				</label>
				<div ref="inputWidth">
					<div className="radio-list">
						{radio_list} {help_block} <span ref="message" className="hide-element" style={{color:"#e73d4a"}}></span>
					</div>
				</div>
			</div>;	
		var r = this.props.type == 2 ? r2 : r1;
        return r;
	}
}
RadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.array,
  checked: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.number,
  labelWidth: PropTypes.string,
  inputWidth: PropTypes.string,
}
export default RadioGroup
