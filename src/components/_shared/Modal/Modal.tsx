import BSModal from 'react-bootstrap/Modal';

import styles from './Modal.module.scss';

export type ModalProps = {
  isShow: boolean;
  onHide: () => void;
  heading?: string;
  subHeading?: string;
  children: JSX.Element;
};

const Modal = ({ isShow, onHide, heading, subHeading, children }: ModalProps): JSX.Element => (
  <BSModal show={isShow} size="lg" aria-labelledby="contained-BSModal-title-vcenter" centered onHide={onHide}>
    {heading && (
      <BSModal.Header closeButton>
        <BSModal.Title id="contained-BSModal-title-vcenter">{heading}</BSModal.Title>
      </BSModal.Header>
    )}
    <BSModal.Body>
      <div className={styles.container}>
        {subHeading && <h4>{subHeading}</h4>}
        <div>{children}</div>
      </div>
    </BSModal.Body>
  </BSModal>
);

export default Modal;
