/**
 * Created by tannguyen on 05/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from '../../../../src/components/modal'
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
        <Modal ref="myModal" id="ahihi" size="modal-lg" onShown={this._onShown.bind(this)}>
          <ModalHeader title="Test Modal ne"></ModalHeader>
          <ModalBody>
            <p>tan test ne</p>

          </ModalBody>
          <ModalFooter closeBtnLabel="Tat di ne">

          </ModalFooter>
        </Modal>
        <button onClick={this._showModal.bind(this)}>show modal</button>
      </div>
    )
  }
}

render(
  <Test />,
  document.getElementById('app')
)
