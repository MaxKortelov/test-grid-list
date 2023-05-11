import React, { ReactElement } from "react";
import Modal from "react-bootstrap/Modal";
import { IInfoModal } from "../../../models/modal-popover";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import { VARIANT } from "../../../models/bootstrap";
import { Info } from "react-bootstrap-icons";

function InfoModal({ showModal, options, closeModal }: IInfoModal): ReactElement {
  return (
    <Modal show={showModal} centered animation contentClassName={classNames("small-modal flex-center py-5")}>
      <Modal.Header className="d-flex justify-content-center">
        <Info className="medium-icon" />
      </Modal.Header>
      <Modal.Body className={classNames("flex-center flex-column")}>
        <h3 className={classNames("flex-center")}>{options.title}</h3>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button className={classNames("modal-button")} onClick={closeModal} variant={VARIANT.SECONDARY}>
          Ok, got it
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoModal;
