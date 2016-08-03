/**
 * Created by tannguyen on 02/08/2016.
 */
import React, {Component, PropTypes} from 'react'

var mixins = {
  inputPropTypes: {
    id: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    style: PropTypes.object,
    className: PropTypes.string,
    onChangeValue: PropTypes.func,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    hide: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
  },

  customPropTypes: {
    check: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool
    ])
  }
}
export default mixins
