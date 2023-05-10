import React from "react";
import classNames from "classnames";
import { Pagination } from "react-bootstrap";
import { IPaginator } from "../../models/paginator";

function Paginator({ page, pages, handleChangePage }: IPaginator) {
  return (
    <Pagination className={classNames("d-flex align-items-center w-100 h-100")}>
      <Pagination.First disabled={page === 1} onClick={() => handleChangePage(1)} />
      <Pagination.Prev disabled={page === 1} onClick={() => handleChangePage(page - 1)} />

      {page > 1 && <Pagination.Item onClick={() => handleChangePage(page - 1)}>{page - 1}</Pagination.Item>}
      <Pagination.Item active>{page}</Pagination.Item>
      {page < pages && <Pagination.Item onClick={() => handleChangePage(page + 1)}>{page + 1}</Pagination.Item>}

      <Pagination.Next disabled={page === pages} onClick={() => handleChangePage(page + 1)} />
      <Pagination.Last disabled={page === pages} onClick={() => handleChangePage(pages)} />
    </Pagination>
  );
}

export default Paginator;
