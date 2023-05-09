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
// import LargeModal from "./largeModal/largeModal";

const ModalContext: React.Context<IModalContext> = React.createContext({
  showModal: (options: IModalOptions) => {
    return new Promise((resolve) => resolve(new Error("showModal context is not created yet")));
  },
  successModal: () => {
    console.info("Function does not exist yet");
  },
  closeModal: () => {
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

  const confirmResolve = (): void => {
    if (promise.current) {
      promise.current?.resolve(null);
    }
  };

  const handleSetSuccess = (): void => setSuccess(true);

  const handleCloseModal = (): void => {
    setSuccess(false);
    setShowModal(false);
    setOptions(initialModalOptions());
  };

  return (
    <ModalContext.Provider
      value={{ showModal: handleShowModal, successModal: handleSetSuccess, closeModal: handleCloseModal }}
    >
      {children}
      {/*Large modal*/}
      {options.type === MODAL_TYPE.LARGE && (
        <LargeModal handleCancel={handleCancel} handleOk={confirmResolve} showModal={showModal} options={options} />
      )}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => useContext(ModalContext);
export default ModalPopOverProvider;
