import React, {Component, PropTypes} from 'react'
import mixins from '../mixins'
class InputFile extends Component {

  constructor(props) {
    super(props)
    this.state={};
    this.filesHandling = [];
  }
  componentDidMount(){
  }

  _onChange(e) {
    console.log("FileInput Component: _onChange", e.target.files);
    console.log("File on input tag:", $(this.refs['inputFile']).prop('files'));
    var choseFiles = e.target.files;
    if(this.props.multiple!==true) {
      this.filesHandling = choseFiles[0]?[choseFiles[0]]:[];
    } else {
      for (let i = 0; i < choseFiles.length; i++) {
        let file = choseFiles[i];
        let isExist = false;
        for (let j = 0; j <this.filesHandling.length; j++) {
          if(this.filesHandling[j].name === file.name) {
            isExist = true;
            break;
          }
        }
        if(!isExist) {
          this.filesHandling.push(file);
        } else {
          console.log("file chose exist");
        }
      }
    }
    this.props.onChangeValue(_.cloneDeep(this.filesHandling), this.props.name);
    this.refs['inputFile'].value ="";
  }
  
  getFiles() {
    return this.props.files;
  }

  _onClick() {
    $(this.refs['inputFile']).click();
  }

  _onRemoveChoseFile(name, e) {
    console.log("_onRemoveChoseFile", name, e);
    for (var i = 0; i < this.filesHandling.length; i++) {
      let file = this.filesHandling[i];
      if (file.name === name) {
        this.filesHandling.splice(i, 1);
        this.props.onChangeValue(_.cloneDeep(this.filesHandling), this.props.name);
        break;
      }
    }

  }

  render(){
    const  {style, onChangeValue, label, multiple, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (this.props.hide == true) {
      styleMix.display = 'none'
    }
    let infoStyle = {};
    if(this.props.showInfo !== true) {
      infoStyle.display = "none";
    }
    var tableFiles = [];
    tableFiles= this.filesHandling.map((item, index) => {
        return  <tr key={index}>
                  <td style={{paddingRight:"10px"}}>{item.name}</td>
                  <td style={{paddingRight:"10px"}}>{(item.size/1024).toFixed(1) + 'KB'}</td>
                  <td><a href="javascript:void(0)" onClick={this._onRemoveChoseFile.bind(this, item.name)}>remove</a></td>
                </tr>
    })
    return  <span>
              <input type="file"
                     ref="inputFile"
                      style={{display: "none"}}
                     multiple={multiple}
                     onChange={this._onChange.bind(this)}
              />
              <input type="button"
                      {...other}
                     style={styleMix}
                     value={label}
                     onClick={this._onClick.bind(this)}
              />
              <table style = {infoStyle}>
                <tbody>
                    {tableFiles}
                </tbody>
              </table>
            </span>

  }
}
InputFile.propTypes = _.assignIn({}, mixins.inputPropTypes, {
  multiple: PropTypes.bool,
  label: PropTypes.string,
  files: PropTypes.array,
  showInfo: PropTypes.bool
})
InputFile.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {},
  multiple: false,
  label: 'Choose File',
  files: [],
  showInfo: true
}
export default InputFile
