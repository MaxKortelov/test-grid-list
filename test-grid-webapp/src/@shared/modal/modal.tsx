import React, { ReactElement, useContext, useRef, useState } from "react";
import {
  IModalContext,
  IModalOptions,
  IModalPopOver,
  IModalPromise,
  initialModalOptions,
  MODAL_TYPE
} from "../../models/modal-popover";
import LargeModal from "./large-modal/large-modal";
import ConfirmCloseModal from "./confirm-modal/confirm-modal";
import InfoModal from "./info-modal/info-modal";

const ModalContext: React.Context<IModalContext> = React.createContext({
  showModal: (it: IModalOptions) => {
    return new Promise((resolve) => resolve(new Error("showModal context is not created yet")));
  },
  successModal: () => {
    console.info("Function does not exist yet");
  },
  closeModal: (it) => {
    console.info("Function does not exist yet");
  }
});

function ModalPopOverProvider({ children }: IModalPopOver): ReactElement {
  const [showModal, setShowModal] = useState(false);
  const [_, setSuccess] = useState(false);
  const promise = useRef<IModalPromise>();
  const [options, setOptions] = useState<IModalOptions>(initialModalOptions());

  const handleShowModal = (options: IModalOptions): Promise<Error | null> => {
    setShowModal(true);
    setOptions(options);
    return new Promise(function (resolve, reject) {
      promise.current = { resolve, reject };
    });
  };

  const handleCancel = (): void => {
    if (promise.current) {
      // Throws error on rejection
      promise.current?.reject("Canceled action");
    }
    handleCloseModal();
  };

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const confirmResolve = (result: any = null): void => {
    if (promise.current) {
      promise.current?.resolve(result);
    }
  };

  const handleSetSuccess = (): void => setSuccess(true);

  const handleCloseModal = (): void => {
    setSuccess(false);
    setShowModal(false);
    setOptions(initialModalOptions());
  };

  const confirmAndClose = (): void => {
    handleCloseModal();
    confirmResolve();
  };

  return (
    <ModalContext.Provider
      value={{ showModal: handleShowModal, successModal: handleSetSuccess, closeModal: handleCloseModal }}
    >
      {children}
      {/*Large modal*/}
      {options.type === MODAL_TYPE.LARGE && (
        <LargeModal
          handleCancel={handleCancel}
          handleOk={confirmResolve}
          closeModal={confirmAndClose}
          showModal={showModal}
          options={options}
        />
      )}

      {/*Confirm modal*/}
      {options.type === MODAL_TYPE.CONFIRM_CLOSE && (
        <ConfirmCloseModal
          showModal={showModal}
          options={options}
          handleCancel={handleCancel}
          handleOk={confirmResolve}
        />
      )}
      {/*Success modal*/}
      {options.type === MODAL_TYPE.INFO && (
        <InfoModal showModal={showModal} options={options} closeModal={handleCloseModal} />
      )}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => useContext(ModalContext);
export default ModalPopOverProvider;
