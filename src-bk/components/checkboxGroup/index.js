/*	use:
    <CheckboxGroup label="CheckboxGroup" name="test[]" ref="checkboxGroup">
        <Checkbox_icheck label="Checkbox 1" name="test[]" ref="checkbox1"/>
        <Checkbox_icheck label="Checkbox 2" name="test[]" ref="checkbox2"/>
        <Checkbox_icheck label="Checkbox 3" name="test[]" ref="checkbox3"/>
    </CheckboxGroup>
    validate:
    if($("input[name*='test']:checked").length <= 0){
        alert("You must check at least 1 box");
    }
*/
import React,{Component, PropTypes} from 'react'
class CheckboxGroup extends Component{
	componentDidMount(){
		$(this.refs.formGroup).addClass(this.props.className);
		if (this.props.type == 2) {
            $(this.refs.labelWidth).addClass(this.props.labelWidth);
            $(this.refs.inputWidth).addClass(this.props.inputWidth);
        }
	}
	render(){
		var style = this.props.style ? this.props.style : {}
		var required = this.props.required == true ? <span className="required"> * </span> : '';
		var help_block = this.props.required == true ? <span className="help-block"> You must check at least 1 box for {this.props.label} </span> : '';
		var r1 = 
			<div className="form-group" ref="formGroup" style={style}>
				<label className="control-label">{this.props.label} {required}</label>
				<div className="checkbox-group">
					{this.props.children} {help_block}
				</div>
			</div>;
		var r2 = 
			<div className="form-group" ref="formGroup" style={style}>
				<label className="control-label" ref="labelWidth">{this.props.label} {required}</label>
				<div ref="inputWidth">	
					<div className="checkbox-group">
						{this.props.children} {help_block}
					</div>
				</div>
			</div>
		var r = this.props.type == 2 ? r2 : r1;
        return (r)
	}
}
CheckboxGroup.propTypes = {
  type: PropTypes.number,
  label: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  labelWidth: PropTypes.string,
  inputWidth: PropTypes.string,
  style: PropTypes.object,
};
export default CheckboxGroup
