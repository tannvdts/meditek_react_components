const {PropTypes} = React;
const RadioButton= React.createClass({
    componentDidMount: function(){
    },
    handleChange: function(){
        const {value, onChange} = this.props;
        onChange(value);
    },
    render: function(){
        const {name, value, checked, label} = this.props;
        return (
            <label className="radio-inline">
                <input type="radio" name={name}
                    className="regular-radio"
                    value={value} checked={checked} 
                    onChange={this.handleChange}/>
                        <span>{label}</span>
            </label>
        );
    },
});

const RadioButtonGroup = React.createClass({
    propTypes: {
        name: PropTypes.string,
        checkedValue: PropTypes.string,
        choices: PropTypes.array,
        onChange: PropTypes.func,
    },
    getDefaultProps: function(){
        return {
        };
    },
    render: function(){
        const {choices, checkedValue, onChange} = this.props;
        const choiceItems = choices.map(choice => {
            const {value, label} = choice;
            const checked = value === checkedValue;
            return (
                <RadioButton
                    key={`radio-button-${value}`}
                    label={label}
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange} />
            );
        });
        return (
            <div className="radio-list">{choiceItems}</div>
        );
    },
});
import React, {Component} from 'react'

class Radio extends Component {
    getDefaultProps(){
        return {
        };
    }
    getInitialState(){
        return {
            checkedValue: '',
        };
    }
    componentDidMount(){ 
    }
    _handleChange(value){
        this.setState({
            checkedValue: value,
        });
        this.props.parent[this.props.child] = value;
    }
    _setValue(value){
        this.setState({
            checkedValue: value,
        });
    }
    _getValue(){
        return this.state.checkedValue;
    }
    render(){
        var required = this.props.required == true ? <span className="required"> * </span> : '';
        var help_block = this.props.required == true ? <span className="help-block"> Provide your {this.props.label} </span> : '';
        return (
            <div className="form-group">
                <label className="control-label">{this.props.label} {required}</label>
                <RadioButtonGroup name={this.props.name}
                    checkedValue={this.state.checkedValue}
                    choices={this.props.choices}
                    onChange={this._handleChange} /> {help_block}
            </div>
        );
    }
}
Radio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  choices: PropTypes.array,
  required: PropTypes.bool,
  parent: PropTypes.object,
  child: PropTypes.string,
}
export default Radio
