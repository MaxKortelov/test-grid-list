import React, { ReactElement } from "react";
import { IRecordComponent } from "../../../models/records";

function Record({ record }: IRecordComponent): ReactElement {
  console.log(record);
  return <div></div>;
}

export default Record;
