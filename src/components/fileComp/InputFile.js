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
    if(this.props.readOnly) return;
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
    if(this.props.readOnly) return;
    $(this.refs['inputFile']).click();
  }

  _onRemoveChoseFile(name, e) {
    if(this.props.readOnly) return;
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
    const  {style, onChangeValue, label, multiple, hide, showInfo, files, readOnly, maxSize, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (hide == true) {
      styleMix.display = 'none'
    }
    let infoStyle = {};
    if(showInfo !== true) {
      infoStyle.display = "none";
    }
    var tableFiles = [];
    tableFiles= this.filesHandling.map((item, index) => {
        return  <tr key={index}>
                  <td style={{paddingRight:"10px"}}>{item.name}</td>
                  <td style={{paddingRight:"10px"}}>
                    {(item.size/1024).toFixed(1) + 'KB'}
                    <span style={{color: item.size>maxSize?'red':''}}>Size limit {(maxSize/1024/1024).toFixed(1)+'MB'}</span>
                  </td>
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
                     disabled={readOnly}
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
  showInfo: PropTypes.bool,
  maxSize: PropTypes.number,
})
InputFile.defaultProps = {
  hide: false,
  disabled: false,
  readOnly: false,
  style: {},
  multiple: false,
  label: 'Choose File',
  files: [],
  showInfo: true,
  maxSize: 10 * 1024 * 1024, //10 MB
}
export default InputFile
