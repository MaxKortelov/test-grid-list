import React, { ReactElement } from "react";
import Modal from "react-bootstrap/Modal";
import { IConfirmModal } from "../../../models/modal-popover";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import { VARIANT } from "../../../models/bootstrap";

function ConfirmCloseModal({ showModal, options, handleCancel, handleOk }: IConfirmModal): ReactElement {
  return (
    <Modal show={showModal} centered animation contentClassName={classNames("small-modal flex-center py-5")}>
      <Modal.Body className={classNames("flex-center flex-column")}>
        <h3 className={classNames("flex-center")}>{options.title}</h3>
      </Modal.Body>

      <Modal.Footer>
        <Button className={classNames("modal-button")} onClick={handleCancel} variant={VARIANT.DANGER}>
          Cancel
        </Button>
        <Button className={classNames("modal-button")} onClick={handleOk} variant={VARIANT.PRIMARY}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmCloseModal;
