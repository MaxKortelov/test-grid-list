import React, { ReactElement, useMemo, useState } from "react";
import { IEditRecord, IEditRecordComponent, initialEditRecord } from "../../../models/editRecord";
import { ROLE, STATUS } from "../../../models/store/records";
import { Button, Form, Spinner } from "react-bootstrap";
import classNames from "classnames";
import { LOADING_STATE, NO_ID, VARIANT } from "../../../models/bootstrap";
import { createRecord, updateRecord } from "../records.service";

function EditRecord({ recordId = 0, handleOk, closeModal }: IEditRecordComponent): ReactElement {
  const statusList = useMemo(() => Object.values(STATUS), []);
  const roles = useMemo(() => Object.values(ROLE), []);
  const [record, setRecord] = useState<IEditRecord>(initialEditRecord());
  const [status, setStatus] = useState<LOADING_STATE>(LOADING_STATE.INITIAL);
  const renderList = (list: string[]): ReactElement[] =>
    list.map((it, index) => (
      <option key={index} defaultValue="0">
        {it.toLowerCase()}
      </option>
    ));

  const handleSelectStatus = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setRecord((s) => ({ ...s, status: e.target.value.toUpperCase() as STATUS }));
  };

  const handleSelectRole = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setRecord((s) => ({ ...s, role: e.target.value.toUpperCase() as ROLE }));
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRecord((s) => ({ ...s, name: e.target.value }));
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRecord((s) => ({ ...s, address: e.target.value }));
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRecord((s) => ({ ...s, amount: Number(e.target.value) }));
  };

  const handleSubmit = () => {
    setStatus(LOADING_STATE.LOADING);
    const request = () => (recordId === NO_ID ? createRecord(record) : updateRecord(record));
    request()
      .then(() => {
        closeModal && closeModal();
      })
      .catch(() => {
        setStatus(LOADING_STATE.ERROR);
      });
  };

  return (
    <Form className="d-flex flex-wrap">
      {/*Example of controlled form*/}
      <div className="d- flex flex-column w-50 p-3">
        <Form.Group className="mb-3 w-100">
          <Form.Label className="text-bold">Status</Form.Label>
          <Form.Select onChange={handleSelectStatus} name="status">
            {renderList(statusList)}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label htmlFor="name" className="text-bold">
            Name
          </Form.Label>
          <Form.Control onChange={handleChangeName} type="text" id="name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label htmlFor="amount" className="text-bold">
            Amount
          </Form.Label>
          <Form.Control onChange={handleChangeAmount} type="number" id="amount" name="amount" min="0" />
        </Form.Group>
      </div>

      <div className="d- flex flex-column w-50 p-3">
        <Form.Group className="mb-3 w-100">
          <Form.Label className="text-bold">Role</Form.Label>
          <Form.Select onSelect={handleSelectRole} name="role">
            {renderList(roles)}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label htmlFor="address" className="text-bold">
            Address
          </Form.Label>
          <Form.Control onChange={handleChangeAddress} type="text" id="address" name="address" />
        </Form.Group>
      </div>

      <div className="d-flex w-100 justify-content-center align-items-center">
        <Button
          className={classNames("modal-button")}
          onClick={handleSubmit}
          variant={status === LOADING_STATE.ERROR ? VARIANT.DANGER : VARIANT.PRIMARY}
          disabled={status === LOADING_STATE.LOADING}
        >
          {status === LOADING_STATE.LOADING ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            "Save"
          )}
        </Button>
      </div>
    </Form>
  );
}

export default EditRecord;
