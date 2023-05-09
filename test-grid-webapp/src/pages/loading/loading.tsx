import React from "react";
import { Spinner } from "react-bootstrap";
import classNames from "classnames";

function Loading() {
  return (
    <div className={classNames("d-flex justify-content-center align-items-center full-screen")}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
