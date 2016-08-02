import React, {Component, PropTypes} from 'react'
class Checkbox extends Component {
    getDefaultProps(){
        return {
            className: "checkbox-inline",
        };
    }
    _onChange(e){
        if(typeof this.props.onChange !== 'undefined')
            this.props.onChange(e.target.checked);
    }
    _setValue(checked){
        $(this.refs.input).prop('checked', checked);
    }
    _getValue(){
        return $(this.refs.input).checked;
    }
    render() {
        return ( 
            <label className={this.props.className}>
                <input type="checkbox" 
                    ref="input" className="regular-checkbox"
                    onChange={this._onChange} />
                        <span>{this.props.label}</span>
            </label>
        );
    }
}
Checkbox.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
};
export default Checkbox
