import React from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import './modal.scss'

const Modal = ({ open, onClose, children }) =>
  ReactDOM.createPortal(
    <div className={cn('modal', open && 'modal--open')}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__content">{children}</div>
    </div>,
    document.getElementById('modal-root'),
  )

export default Modal
