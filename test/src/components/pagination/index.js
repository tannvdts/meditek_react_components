import React, {Component, PropTypes} from 'react'
class Pagination extends Component {
	constructor(){
		super();
		this.data = {
			activePage:1,
            item : 10,
            maxButtons: 5,
		};
	}
	getInitialState(){
		return {
            
        };
	}
    init(obj) {
        if(!_.isEmpty(obj)) {
            this.data = obj;
        }
        var self = this;
        var id = this.props.id ? '#' + this.props.id : '#pagination'
        $(id).empty();
        $(id).removeData("twbs-pagination");
        $(id).unbind("page");
        $(id).twbsPagination({
            totalPages:this.data.item,
            visiblePages:this.data.maxButtons,
            initiateStartPageClick:false,
			onPageClick: function (event, page) {
				if(typeof self.props.onChange !== 'undefined'){
		            self.props.onChange(page);
		        }
	        }
        });
    }
    componentDidMount() {

    }
	render(){
        var id = this.props.id ? this.props.id : 'pagination'
		return(
            <ul id={id} className="pagination-sm"></ul>
        )
	}
}
Pagination.propTypes = {
  item : PropTypes.number,
  maxButtons: PropTypes.number,
  activePage: PropTypes.number,
  onChange: PropTypes.func,
  id: PropTypes.string,
}
export default Pagination
