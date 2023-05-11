import { ReactElement } from "react";

export interface IModalPopOver {
  children: ReactElement;
}

export interface IModalContext {
  showModal: (options: IModalOptions) => Promise<Error | null>;
  successModal: () => void;
  closeModal: (it?: any) => any;
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
  modalContext: IModalContext | null;
}

export enum MODAL_TYPE {
  EMPTY = "",
  LARGE = "LARGE",
  CONFIRM_CLOSE = "CONFIRM_CLOSE",
  INFO = "INFO"
}

export function initialModalOptions(): IModalOptions {
  return {
    type: MODAL_TYPE.EMPTY,
    title: "",
    children: null,
    modalContext: null
  };
}

export interface ILargeModal {
  handleOk: (it?: any) => void;
  handleCancel: () => void;
  showModal: boolean;
  options: IModalOptions;
  closeModal: () => void;
}

export interface ILargeModalChildrenProps {
  handleOk?: (it?: any) => void;
  handleCancel?: () => void;
  closeModal?: () => void;
}

export interface IConfirmModal {
  handleCancel: () => void;
  handleOk: (it?: any) => void;
  showModal: boolean;
  options: IModalOptions;
}

export interface IInfoModal {
  closeModal: () => void;
  showModal: boolean;
  options: IModalOptions;
}
