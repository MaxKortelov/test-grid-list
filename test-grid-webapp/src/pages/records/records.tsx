import React, { ReactElement } from "react";
import { Pagination } from "react-bootstrap";
import Record from "./record/record";
import Filters from "./filters/filters";
import styles from "./records.module.scss";
import classNames from "classnames";
import useRecordsSelectors from "../../store/selectors/records";
import { useActions } from "../../hooks/useActions";

function Records(): ReactElement {
  const { records, pagination } = useRecordsSelectors();
  const { getRecords, changePagination } = useActions();

  const renderRecords = (): ReactElement[] => {
    return records.map((record, index) => <Record record={record} key={index} />);
  };

  const handleChangePage = (page: number): void => {
    console.log(page);
    changePagination({ ...pagination, page });
    getRecords();
  };

  return (
    <div className="d-flex w-100 h-100">
      <Filters />
      <div className="d-flex flex-grow-1 h-100 flex-column overflow-auto align-items-center">
        <div className="flex-grow-1">{renderRecords()}</div>
        <Pagination className={classNames(styles.pagination)}>
          <Pagination.First disabled={pagination.page === 1} onClick={() => handleChangePage(1)} />
          <Pagination.Prev disabled={pagination.page === 1} onClick={() => handleChangePage(pagination.page - 1)} />

          {pagination.page > 1 && (
            <Pagination.Item onClick={() => handleChangePage(pagination.page - 1)}>
              {pagination.page - 1}
            </Pagination.Item>
          )}
          <Pagination.Item active>{pagination.page}</Pagination.Item>
          {pagination.page < pagination.pages && (
            <Pagination.Item onClick={() => handleChangePage(pagination.page + 1)}>
              {pagination.page + 1}
            </Pagination.Item>
          )}

          <Pagination.Next
            disabled={pagination.page === pagination.pages}
            onClick={() => handleChangePage(pagination.page + 1)}
          />
          <Pagination.Last
            disabled={pagination.page === pagination.pages}
            onClick={() => handleChangePage(pagination.pages)}
          />
        </Pagination>
      </div>
    </div>
  );
}

export default Records;
