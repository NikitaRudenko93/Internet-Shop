const Modal = ({ children, visible, setVisible }) => {
  return (
    <div
      className={`${visible ? "modal modal_active" : "modal"}`}
      onClick={() => setVisible(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
