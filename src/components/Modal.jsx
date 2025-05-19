import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  // By removing the ref and imperial hangle we manage the modal in a declerative way, instead of and imperative way
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
