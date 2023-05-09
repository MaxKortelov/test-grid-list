import { ReactElement } from "react";

export interface IModalPopOver {
  children: ReactElement;
}

export interface IModalContext {
  showModal: (options: IModalOptions) => Promise<Error | null>;
  successModal: () => void;
  closeModal: () => void;
}

export interface IModalPromise {
  resolve: (value: Error | PromiseLike<Error | null> | null) => void;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  reject: (reason?: any) => void;
}

export interface IModalOptions {
  type: MODAL_TYPE;
  title?: string;
  children: ReactElement | ReactElement[] | null;
}

export enum MODAL_TYPE {
  EMPTY = "",
  LARGE = "Large"
}

export function initialModalOptions(): IModalOptions {
  return {
    type: MODAL_TYPE.EMPTY,
    title: "",
    children: null
  };
}

export interface ILargeModal {
  handleOk: () => void;
  handleCancel: () => void;
  showModal: boolean;
  options: IModalOptions;
}
