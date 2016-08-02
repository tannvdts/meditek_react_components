import React, {Component, PropTypes} from 'react'
class Table extends Component {
	_mapObject(object, callback){
		return Object.keys(object).map(function(key){
			return callback(key, object[key]);
		});
	}
	render(){
		var thead = this._mapObject(this.props.title, function(key, value){
			return <th key={key}>{value}</th>;
		});
		
		var titlecoppy = this.props.title;
		var tbody = this.props.data.map(function(d, index){
			var td = Object.keys(d).map(function(key) {
				var isExist = false;
				for(var titleKey in titlecoppy){
					if(key == titleKey)
						isExist = true;
				}
				if(isExist ==true)
					return (<td>{d[key]}</td>);
			});
			return (
				<tr key={index}>
					{td}
				</tr>
			);
		});

		return (
			<div className="table-scrollable table-scrollable-borderless margin-top-20">
                <table className="table table-hover table-light">
                    <thead>
                        <tr className="uppercase">
							{thead}
						</tr>
                    </thead>
                    <tbody>
                    	{tbody}
	                </tbody>
                </table>
            </div>	
		);

	}
}
Table.propTypes = {
  title: PropTypes.object,
  data: PropTypes.array,
}
export default Table
