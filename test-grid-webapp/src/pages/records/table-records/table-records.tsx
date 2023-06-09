import React, { ReactElement, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import useRecordsSelectors from "../../../store/selectors/records";
import useSettingsSelectors from "../../../store/selectors/settings";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { CANCELLED_ACTION, VARIANT } from "../../../models/bootstrap";
import { IModalOptions, MODAL_TYPE } from "../../../models/modal-popover";
import { useModalContext } from "../../../@shared/modal/modal";
import { useActions } from "../../../hooks/useActions";
import { deleteRecord } from "../records.service";
import EditRecord from "../edit-record/edit-record";

function TableRecords(): ReactElement {
  const { records } = useRecordsSelectors();
  const { theme } = useSettingsSelectors();
  const modalContext = useModalContext();
  const { getRecords } = useActions();

  const removeRecord = async (recordId: number): Promise<void> => {
    const options: IModalOptions = {
      type: MODAL_TYPE.CONFIRM_CLOSE,
      title: "Do you want to delete record",
      modalContext,
      children: null
    };

    const errorOptions = {
      type: MODAL_TYPE.INFO,
      title: "Something went wrong... Try again",
      modalContext,
      children: null
    };

    await modalContext
      .showModal(options)
      .then(async () => await deleteRecord(recordId))
      .then(() => getRecords())
      .then(() => modalContext.closeModal())
      .catch((error) => {
        if (error !== CANCELLED_ACTION) {
          modalContext.showModal(errorOptions);
        }
      });
  };

  const editRecord = async (recordId: number) => {
    const options: IModalOptions = {
      type: MODAL_TYPE.LARGE,
      title: "Add new record",
      children: <EditRecord recordId={recordId} />,
      modalContext: modalContext
    };

    await modalContext
      .showModal(options)
      .then(() => getRecords())
      .catch(() => modalContext.closeModal());
  };

  useEffect(() => {
    getRecords();
    //eslint-disable-next-line
  }, []);

  const renderRows = (): ReactElement[] =>
    records.map((record, index) => (
      <tr key={index}>
        <td className="text-center">{record.id}</td>
        <td>{record.name}</td>
        <td>{record.amount}</td>
        <td>{record.address}</td>
        <td className="d-flex justify-content-center gap-3">
          <Button variant={VARIANT.LIGHT} onClick={() => removeRecord(record.id)}>
            <TrashFill />
          </Button>
          <Button variant={VARIANT.LIGHT} onClick={() => editRecord(record.id)}>
            <PencilFill />
          </Button>
        </td>
      </tr>
    ));

  return (
    <div className="flex-grow-1 w-90 py-4">
      <Table striped bordered hover variant={theme}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Address</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </Table>
    </div>
  );
}

export default TableRecords;
