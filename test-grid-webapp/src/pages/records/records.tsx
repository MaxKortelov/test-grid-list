import React, { ReactElement } from "react";
import Filters from "./filters/filters";
import styles from "./records.module.scss";
import useRecordsSelectors from "../../store/selectors/records";
import { useActions } from "../../hooks/useActions";
import TableRecords from "./table-records/table-records";
import Paginator from "../../@shared/paginator/paginator";

function Records(): ReactElement {
  const { pagination } = useRecordsSelectors();
  const { getRecords, changePagination } = useActions();

  const handleChangePage = (page: number): void => {
    changePagination({ ...pagination, page });
    getRecords();
  };

  return (
    <div className="d-flex w-100 h-100 mh-100">
      <Filters />
      <div className="d-flex flex-grow-1 h-100 flex-column overflow-auto align-items-center mh-100">
        <TableRecords />
        <div className={styles.pagination}>
          <Paginator page={pagination.page} pages={pagination.pages} handleChangePage={handleChangePage} />
        </div>
      </div>
    </div>
  );
}

export default Records;
