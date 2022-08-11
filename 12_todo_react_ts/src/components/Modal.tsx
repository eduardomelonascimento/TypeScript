import { ReactNode, MouseEvent } from "react";
import styles from "./Modal.module.css";

type Props = {
  children: ReactNode;
  hideModal(show: boolean): void;
};

export default function Modal({ children, hideModal }: Props) {
  function handleClick(e: MouseEvent): void {
    if (e.target === e.currentTarget) {
      hideModal(false);
    }
  }
  return (
    <div
      className={`${styles.modal_overlay} hidden`}
      id="modal"
      onClick={handleClick}
    >
      <div className={styles.modal_container} id="modal-container">
        <h2>Modal</h2>
        {children}
      </div>
    </div>
  );
}
