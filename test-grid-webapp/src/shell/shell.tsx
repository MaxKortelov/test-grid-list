import React from "react";
import { Outlet } from "react-bootstrap-icons";
import styles from "./shell.module.scss";
import classNames from "classnames";

function Shell() {
  return (
    <div className={classNames("d-flex justify-content-center align-items-center full-screen")}>
      <div className={styles.header}></div>
      <Outlet />
      <div className={styles.footer}></div>
    </div>
  );
}

export default Shell;
