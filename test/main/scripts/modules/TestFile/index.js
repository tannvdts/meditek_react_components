/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {FileInput} from '../../../../src/components/file'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      files: []
    }
  }

  _onTestFileInputChange(files) {
    console.log("_onTestFileInputChange", files);
    this.setState({
      files:files.splice(0,1)
    })
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <FileInput multiple={true} files={this.state.files} onChangeValue={this._onTestFileInputChange.bind(this)}></FileInput>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
