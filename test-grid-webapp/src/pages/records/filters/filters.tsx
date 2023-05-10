import React from "react";
import classNames from "classnames";
import styles from "./filters.module.scss";
import useRecordsSelectors from "../../../store/selectors/records";

function Filters() {
  const { filters } = useRecordsSelectors();
  console.log(filters);
  return <div className={classNames("h-100", styles.filters)}>filters works</div>;
}

export default Filters;
