import React, { ReactElement, useMemo } from "react";
import classNames from "classnames";
import styles from "./filters.module.scss";
import useRecordsSelectors from "../../../store/selectors/records";
import { Button, Form } from "react-bootstrap";
import { ROLE_FILTERS, STATUS_FILTERS } from "../../../models/store/records";
import { useActions } from "../../../hooks/useActions";
import { useDebounceCallback } from "../../../hooks/useDebounceCallback";
import { PlusCircle } from "react-bootstrap-icons";
import { useModalContext } from "../../../@shared/modal/modal";
import { IModalOptions, MODAL_TYPE } from "../../../models/modal-popover";
import EditRecord from "../edit-record/edit-record";

function Filters() {
  const { filters } = useRecordsSelectors();
  const statusList = useMemo(() => Object.values(STATUS_FILTERS), []);
  const roles = useMemo(() => Object.values(ROLE_FILTERS), []);
  const { changeFilters, getRecords, changePagination } = useActions();
  const modalContext = useModalContext();
  const { pagination } = useRecordsSelectors();

  const renderList = (list: string[]): ReactElement[] =>
    list.map((it, index) => (
      <option key={index} defaultValue="0">
        {it.toLowerCase()}
      </option>
    ));

  const handleSelectStatus = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    changeFilters({ ...filters, status: e.target.value.toUpperCase() as STATUS_FILTERS });
    changePagination({ ...pagination, page: 1 });
    getRecords();
  };

  const handleSelectRole = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    changeFilters({ ...filters, role: e.target.value.toUpperCase() as ROLE_FILTERS });
    changePagination({ ...pagination, page: 1 });
    getRecords();
  };

  const handleChangeNameFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeFilters({ ...filters, name: e.target.value });
    changePagination({ ...pagination, page: 1 });
    getRecords();
  };

  const debounceCallback = useDebounceCallback(handleChangeNameFilter, 300);

  const handleOpenModal = (): void => {
    const options: IModalOptions = {
      type: MODAL_TYPE.LARGE,
      title: "Add new record",
      children: <EditRecord />,
      modalContext: modalContext
    };

    modalContext
      .showModal(options)
      .then((res) => console.log(res))
      .catch(() => modalContext.closeModal());
  };

  return (
    <div className={classNames("d-flex justify-content-center h-100 pt-4", styles.filters)}>
      <Form className="w-90 d-flex flex-column align-items-center">
        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
          <Form.Label className="text-bold">Name</Form.Label>
          <Form.Control type="text" placeholder="Filter by name" onChange={debounceCallback} />
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label className="text-bold">Status</Form.Label>
          <Form.Select onChange={handleSelectStatus}>{renderList(statusList)}</Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label className="text-bold">Role</Form.Label>
          <Form.Select onChange={handleSelectRole}>{renderList(roles)}</Form.Select>
        </Form.Group>

        <Button className="mt-4" variant="danger" onClick={handleOpenModal}>
          <PlusCircle />
          <span> Add new record </span>
        </Button>
      </Form>
    </div>
  );
}

export default Filters;
