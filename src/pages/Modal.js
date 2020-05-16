import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './css/modal.css';
export default class Modal extends Component {
  constructor(props) {
    super(props);

    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
  }
  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
  render() {
    // createPortal传送门两个参数：1. 传送的内容，传送到的地方
    return createPortal(
      <div className="modal">
        modal
      </div>,
      this.node
    )
  }
}
