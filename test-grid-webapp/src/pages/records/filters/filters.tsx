import React from "react";
import classNames from "classnames";
import styles from "./filters.module.scss";
import useRecordsSelectors from "../../../store/selectors/records";
import { Form } from "react-bootstrap";

function Filters() {
  const { filters } = useRecordsSelectors();
  console.log(filters);
  return (
    <div className={classNames("d-flex justify-content-center h-100 pt-4", styles.filters)}>
      <Form className="w-90">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-bold">Name</Form.Label>
          <Form.Control type="text" placeholder="Filter by name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-bold">Status</Form.Label>
          <Form.Select>
            <option>All</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-bold">Role</Form.Label>
          <Form.Select>
            <option>All</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Filters;
