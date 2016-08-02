import React, {Component, PropTypes} from 'react'
class SignatureCanvas extends Component {
	getDefaultProps(){
		return {
			background: 'white',
			color: "#444",
			lineWidth: 5,
			width: '100%',
			height: '300px',
		};
	}
	componentDidMount(){
		var canvas = document.getElementById("newSignature");
		var context = canvas.getContext("2d");
		canvas.style.width =this.props.width;
  		canvas.style.height=this.props.height;
  		canvas.width  = canvas.offsetWidth;
  		canvas.height = canvas.offsetHeight;
		context.fillStyle = this.props.background;
		context.strokeStyle = this.props.color;
		context.lineWidth = this.props.lineWidth;
		context.lineCap = "round";
		context.fillRect(0, 0, canvas.width, canvas.height);
		var disableSave = true;
		var pixels = [];
		var cpixels = [];
		var xyLast = {};
		var xyAddLast = {};
		var calculate = false;
		{ 	//functions
			function remove_event_listeners() {
				canvas.removeEventListener('mousemove', on_mousemove, false);
				canvas.removeEventListener('mouseup', on_mouseup, false);
				canvas.removeEventListener('touchmove', on_mousemove, false);
				canvas.removeEventListener('touchend', on_mouseup, false);

				document.body.removeEventListener('mouseup', on_mouseup, false);
				document.body.removeEventListener('touchend', on_mouseup, false);
			}

			function get_coords(e) {
				var x, y;

				if (e.changedTouches && e.changedTouches[0]) {
					var offsety = canvas.offsetTop || 0;
					var offsetx = canvas.offsetLeft || 0;

					x = e.changedTouches[0].pageX - offsetx;
					y = e.changedTouches[0].pageY - offsety;
				} else if (e.layerX || 0 == e.layerX) {
					x = e.layerX;
					y = e.layerY;
				} else if (e.offsetX || 0 == e.offsetX) {
					x = e.offsetX;
					y = e.offsetY;
				}

				return {
					x : x, y : y
				};
			};

			function on_mousedown(e) {
				e.preventDefault();
				e.stopPropagation();

				canvas.addEventListener('mouseup', on_mouseup, false);
				canvas.addEventListener('mousemove', on_mousemove, false);
				canvas.addEventListener('touchend', on_mouseup, false);
				canvas.addEventListener('touchmove', on_mousemove, false);
				document.body.addEventListener('mouseup', on_mouseup, false);
				document.body.addEventListener('touchend', on_mouseup, false);

				empty = false;
				var xy = get_coords(e);
				context.beginPath();
				pixels.push('moveStart');
				context.moveTo(xy.x, xy.y);
				pixels.push(xy.x, xy.y);
				xyLast = xy;
			};

			function on_mousemove(e, finish) {
				e.preventDefault();
				e.stopPropagation();

				var xy = get_coords(e);
				var xyAdd = {
					x : (xyLast.x + xy.x) / 2,
					y : (xyLast.y + xy.y) / 2
				};

				if (calculate) {
					var xLast = (xyAddLast.x + xyLast.x + xyAdd.x) / 3;
					var yLast = (xyAddLast.y + xyLast.y + xyAdd.y) / 3;
					pixels.push(xLast, yLast);
				} else {
					calculate = true;
				}

				context.quadraticCurveTo(xyLast.x, xyLast.y, xyAdd.x, xyAdd.y);
				pixels.push(xyAdd.x, xyAdd.y);
				context.stroke();
				context.beginPath();
				context.moveTo(xyAdd.x, xyAdd.y);
				xyAddLast = xyAdd;
				xyLast = xy;

			};

			function on_mouseup(e) {
				remove_event_listeners();
				disableSave = false;
				context.stroke();
				pixels.push('e');
				calculate = false;
			};
		}
		canvas.addEventListener('touchstart', on_mousedown, false);
		canvas.addEventListener('mousedown', on_mousedown, false);
	}
	_signatureSave() {
		var canvas = document.getElementById("newSignature");// save canvas image as data url (png format by default)
		var dataURL = canvas.toDataURL("image/png");
		document.getElementById("saveSignature").src = dataURL;
	}
	_signatureClear() {
		var canvas = document.getElementById("newSignature");
		var context = canvas.getContext("2d");
		context.clearRect(0, 0, canvas.width, canvas.height);
	}
	render(){
		return (
			<div>
				<div id="canvas">
		            <canvas className="roundCorners" id="newSignature"
		            	style={{
		            		"position": "relative", 
		            		"margin": 0, 
		            		"padding": 0, 
		            		"border": "1px solid #c4caac"
		            	}}>
		            </canvas>
		        </div>
		        <button type="button" className="btn btn-primary" onClick={this._signatureSave}>Save signature</button>
	        	<button type="button" className="btn btn-default" onClick={this._signatureClear}>Clear signature</button>
	        	<br/>
        		<div className="thumbnail margin-top-20"><img id="saveSignature" alt="Saved image png"/></div>
	        </div>
		);
	}
}
SignatureCanvas.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  lineWidth: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
}
export default SignatureCanvas
