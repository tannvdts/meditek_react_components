/**
 * Created by tannguyen on 05/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {ModalComp} from '../../../../src/index'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    var self = this;
  }
  _showModal() {
    this.refs['myModal'].action('show');
  }

  _onShown(e) {
    console.log("Test: onshown", e);
    
  }
  render() {
    return (
      <div>
        <ModalComp.Modal ref="myModal" id="ahihi" size="modal-lg" onShown={this._onShown.bind(this)}>
          <ModalComp.ModalHeader title="Test Modal ne"></ModalComp.ModalHeader>
          <ModalComp.ModalBody>
            <p>tan test ne</p>

          </ModalComp.ModalBody>
          <ModalComp.ModalFooter closeBtnLabel="Tat di ne">

          </ModalComp.ModalFooter>
        </ModalComp.Modal>
        <button onClick={this._showModal.bind(this)}>show modal</button>
      </div>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
