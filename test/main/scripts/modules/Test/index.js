/**
 * Created by tannguyen on 03/08/2016.
 */
/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import ComponentTest from '../../../../src/components/componentTest'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ComponentTest/>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
