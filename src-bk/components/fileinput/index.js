import React, {Component, PropTypes} from 'react'
import Service from '../../services/restfulAPI'
import Config from '../../config/index'
class FileInput extends Component {
	constructor(){
		super();
		this.img = 'http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image';
	}
	getDefaultProps(){
		return {
			label: '',
			defaultImage: "assets/global/images/no_person.jpg",
		};
	}
	componentDidMount(){
		$(this.refs.inputFile).on('change', e => {
			// this._uploadFile();
		})
	}
	_setValue(value){
		// Service.getFile('41c20b82-c98a-4276-91aa-033719b37a21',200)
		if(value) {
			Service.getFile('41c20b82-c98a-4276-91aa-033719b37a21',200)
	        .then(res => {
	            console.log("res ",res);
	            var url = Config.getFileToUrl(res);
	            if(url) {
	            	this.img = url;
	            	$('#image').attr('src',this.img);
	            }
	            else {
	            	$('#image').attr('src',this.img);
	            }

	        }, err => {
	            console.log("err ",err);
	        });
		}
		else {
			$('#image').attr('src',this.img);
		}
	}
	_uploadFile() {
		if($(this.refs.inputFile).prop('files')[0]) {
			var p = new Promise((resolve, reject) => {
				var fileData = new FormData();
				fileData.append('uploadFile',$(this.refs.inputFile).prop('files')[0]);
				console.log("fileData ",fileData)
				Service.uploadFile(fileData)
				.then(function(response) {
					// console.log("response ",response);
					resolve(response);
				}, function(err) {
					console.log("err ",err);
					reject(err);
				})
			});
			return p;
		}
	}
	render(){
		return (
			<div className="form-group" ref="file">
                <label className="control-label col-lg-3 col-md-3 col-sm-3 col-xs-1">&nbsp;</label>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-10">
                    <div className="fileinput fileinput-new" data-provides="fileinput">
                        <div className="fileinput-new thumbnail" style={{"width": "200px", "height": "150px"}}>
                            <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" ref="image" id="image" style={{"width": "200px", "height": "150px"}} /> </div>
                        <div className="fileinput-preview fileinput-exists thumbnail" style={{"maxWidth": "200px", "maxHeight":"150px"}}> </div>
                        <div>
                            <span className="btn default btn-file">
                                <span className="fileinput-new"> Select image </span>
                                <span className="fileinput-exists"> Change </span>
                                <input type="file" name="input" id="input" ref="inputFile" /> 
                            </span>
                            <a href="javascript:;" className="btn red fileinput-exists" data-dismiss="fileinput"> Remove </a>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}
FileInput.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string,
  defaultImage: PropTypes.string,
  name: PropTypes.string,
  id:PropTypes.str
}
export default FileInput
