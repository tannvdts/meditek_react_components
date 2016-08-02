/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import InputText from '../../../../src/components/inputText'
class Test extends Component{

  render() {
    return (
      <InputText/>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
