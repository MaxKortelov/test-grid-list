import React, { ReactElement } from "react";
import { Table } from "react-bootstrap";
import useRecordsSelectors from "../../../store/selectors/records";
import useSettingsSelectors from "../../../store/selectors/settings";

function TableRecords(): ReactElement {
  const { records } = useRecordsSelectors();
  const { theme } = useSettingsSelectors();

  const renderRows = (): ReactElement[] =>
    records.map((record, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{record.name}</td>
        <td>{record.amount}</td>
        <td>{record.address}</td>
      </tr>
    ));

  return (
    <div className="flex-grow-1 w-90 py-4">
      <Table striped bordered hover variant={theme}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </Table>
    </div>
  );
}

export default TableRecords;
