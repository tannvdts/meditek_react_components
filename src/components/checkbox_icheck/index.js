import React, {Component, PropTypes} from 'react'
class Checkbox_icheck extends Component {
	constructor() {
	    super();
	    this.state = {value:''};
	}
	getDefaultProps(){
        return {
            className: "checkbox",
        };
    }
    getInitialState(){
        return {
        	value: "N",
        };
    }
	componentDidMount(){
		var self = this;
		$(this.refs.input).iCheck({
		    checkboxClass: 'icheckbox_square-blue',
		    increaseArea: '20%' // optional
		});
		$(this.refs.input).on('ifChecked',function(e){
			self.state.value = "Y";
		});
		$(this.refs.input).on('ifUnchecked',function(e){
			self.state.value = "N";
		});
		$(this.refs.input).on('ifChanged', function(e){
			if(typeof self.props.onChange !== 'undefined'){
            	self.props.onChange(e.target.checked);
			}
		});
	}
    _setValue(value){
		if (value == "Y")
			$(this.refs.input).iCheck('check');
		else
			$(this.refs.input).iCheck('uncheck');
    }
    _getValue(){
        return this.state.value;
    }
    _getName(){
    	return this.props.name;
    }
	render(){
		return (
			<label className={this.props.className}>
                <input type="checkbox" name={this.props.name} ref="input"/>
                {this.props.label}
            </label>
		)
	}
}
Checkbox_icheck.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}
export default Checkbox_icheck
