/**
 * Created by tannguyen on 03/08/2016.
 */
import React, {Component, PropTypes} from 'react'
class InputText extends Component {

  constructor(props) {
    super(props)
    this.state={
      value: 'Hello!'
    }
  }
  handleChange (event) {
    console.log(event.target.value);
    this.setState({value: event.target.value.substr(0, 10)});
  }

  render(){
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    );

  }
}
export default InputText
