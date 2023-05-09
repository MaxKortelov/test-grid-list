import React from "react";
import { Outlet } from "react-bootstrap-icons";
import styles from "./shell.module.scss";

function Shell() {
  return (
    <div>
      <div className={styles.header}></div>
      <Outlet />
      <div className={styles.footer}></div>
    </div>
  );
}

export default Shell;
