import React, { ReactElement } from "react";
import { ILargeModal, ILargeModalChildrenProps } from "../../../models/modal-popover";
import classNames from "classnames";
import { Button, Modal } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";

function LargeModal({ showModal, handleOk, handleCancel, closeModal, options }: ILargeModal) {
  const childrenWithProps = React.Children.map(options.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ReactElement<ILargeModalChildrenProps>, {
        handleOk,
        handleCancel,
        closeModal
      });
    }
    return child;
  });

  return (
    <Modal show={showModal} animation contentClassName={classNames("large-modal flex-center p-3")} size="xl" centered>
      <Modal.Header
        className={classNames("position-relative d-flex justify-content-center align-tems-center w-100 border-0 mb-4")}
      >
        <span className="text-bold">{options.title}</span>
        <Button variant="light" className={classNames("position-absolute border-0 end-0 top-0")} onClick={handleCancel}>
          <XLg />
        </Button>
      </Modal.Header>
      <Modal.Body className={classNames("border-0")}>{options.children && childrenWithProps}</Modal.Body>
    </Modal>
  );
}

export default LargeModal;
