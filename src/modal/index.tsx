import React from 'react';
import ReactDom from 'react-dom';

type ModalProps = {
  open: boolean
  children: React.ReactNode
}

const Modal = ({ open, children }: ModalProps) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="modal" />
      <div className="modal-overlay">
        {children}
      </div>
    </>,
    document.getElementById('portal')!,
  );
};

export default Modal;
