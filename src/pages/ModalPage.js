import React, { Component } from 'react'
import Modal from './Modal';

export default class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }
  setModal = () => {
    this.setState({showModal: !this.state.showModal})
  }
  render() {
    const {showModal} = this.state;
    return (
      <div>
        <h3>ModalPage</h3>
        {showModal && <Modal/>}
        <button onClick={this.setModal}>toggle</button>
      </div>
    )
  }
}
