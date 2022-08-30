import React, { useState } from "react";
import "./../index.scss";
import "./Modal.scss";

interface Props {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const ModalDialog = ({ open, setOpen }: Props) => {
  return (
    <div className={`overlay animated ${open ? "show" : ""}`}>
      <div className="modal">
        <svg
          onClick={() => setOpen(false)}
          height="200"
          viewBox="0 0 200 200"
          width="200"
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <img
          alt="gif"
          src="https://media.giphy.com/media/BexheRKsUkJgc/giphy.gif"
        />
      </div>
    </div>
  );
};

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="modal-content">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Open window
      </button>
      <ModalDialog open={open} setOpen={setOpen} />
    </div>
  );
}

export default Modal;
