import React, {Component, PropTypes} from 'react'
import Pagination from "react-js-pagination"
//https://www.npmjs.com/package/react-js-pagination
//https://github.com/vayser/react-js-pagination
class PaginationCustom extends Component {

  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount(){
  }

  _onChange(pageNumber) {
    console.log(`Pagination Component: active page is ${pageNumber}`);
    if(this.props.onChangeValue) {
      this.props.onChangeValue(pageNumber, this.props.name);
    }
  }

  getActivePage() {
    return this.props.activePage;
  }

  render(){
    const  {id, style, className, onChangeValue, name, disabled, hide, ariaLabel, ...other } = this.props;
    let styleMix = _.assignIn({}, style);
    if (hide == true) {
      styleMix.display = 'none'
    }

    return (
      <nav
        id={id}
        style={styleMix}
        className={className}
        name={name}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        <Pagination
          {...other}
          onChange={this._onChange.bind(this)}/>
      </nav>
    )

  }
}
PaginationCustom.propTypes = _.assignIn({}, {
  id: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  style: PropTypes.object,
  className: PropTypes.string,
  onChangeValue: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  hide: PropTypes.bool,
  ariaLabel: PropTypes.string
})
PaginationCustom.defaultProps = {
  hide: false,
  disabled: false,
  style: {},
  ariaLabel: 'Page navigation'
}
export default PaginationCustom
