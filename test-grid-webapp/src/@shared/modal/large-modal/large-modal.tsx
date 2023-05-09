import React from "react";
import { ILargeModal } from "../../../models/modal-popover";
import classNames from "classnames";
import { Button, Modal } from "react-bootstrap";
import { ArrowRight, XLg } from "react-bootstrap-icons";
import { VARIANT } from "../../../models/bootstrap";

function LargeModal({ showModal, handleOk, handleCancel, options }: ILargeModal) {
  return (
    <Modal show={showModal} animation contentClassName={classNames("large-modal flex-center py-3")} size="xl" centered>
      <Modal.Header
        className={classNames("position-relative d-flex justify-content-center align-tems-center w-100 border-0 mb-4")}
      >
        <span>{options.title}</span>
        <Button variant="light" className={classNames("position-absolute border-0")} onClick={handleCancel}>
          <XLg />
        </Button>
      </Modal.Header>
      <Modal.Body className={classNames("border-0")}>{options.children}</Modal.Body>
      <Modal.Footer className={classNames("d-flex justify-content-start border-0 w-100")}>
        <Button
          className={classNames(
            "modal-button background-orange background-orange-hover border-orange d-flex align-items-center"
          )}
          onClick={handleOk}
          variant={VARIANT.SECONDARY}
        >
          <ArrowRight className={classNames("mx-2")} />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LargeModal;
