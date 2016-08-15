/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {InputFile, InputFileImagePreview} from '../../../../src/components/file'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      files: []
    }
  }

  _onTestFileInputChange(fileList, name) {
    var newState = {};
    if(name === 'TestFile') {
      newState.files = fileList;
    }
    this.setState(newState);
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <div>
        <InputFile showInfo={true} multiple={true} name={'TestFile'} files={this.state.files} onChangeValue={this._onTestFileInputChange.bind(this)}/>
        {this.state.files.map((file, index) => {
          return <InputFileImagePreview file={file} style = {{width: "100px"}} key={index}></InputFileImagePreview>
        })}
      </div>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
