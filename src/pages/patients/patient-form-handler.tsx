import type { FC } from "react";
import {PropsWithChildren, useState} from "react";
import {Button, Modal, Label, Toast} from 'flowbite-react'
import InputWithOptions from "../../components/input-with-options";

interface ModalProp {
    modalOpen: boolean
    toggleModal: () => void
}

const PatientFormHandler: FC<PropsWithChildren<ModalProp>> = ({ modalOpen, toggleModal }) => {
    const [showToast, setShowToast] = useState(false);

    function performAction() {
        toggleModal();
        setShowToast(true);
    }

    return (
        <>
            <Modal dismissible show={modalOpen} onClose={toggleModal}>
                <Modal.Header>Add a patient account</Modal.Header>
                <Modal.Body className="pt-0">
                    <p>User will get notified and asked to update their password on Login.</p>

                    <form className="grid grid-cols-2 gap-5">

                        <div>
                            <InputWithOptions
                                type="text"
                                name="patient-first-name"
                                label="First Name*"
                                placeholder="name@example.com"
                                getInputValue={() => {}}
                            />
                        </div>
                        <div>
                            <InputWithOptions
                                type="text"
                                name="patient-last-name"
                                label="Last Name*"
                                placeholder="name@example.com"
                                getInputValue={() => {}}
                            />
                        </div>

                        <div className="col-span-2">
                            <InputWithOptions
                                type="email"
                                name="patient-email"
                                label="Email"
                                placeholder="name@example.com"
                                getInputValue={() => {}}
                            />
                        </div>

                        <div className="col-span-2">
                            <div className="flex justify-between">
                                <Label htmlFor="patient-password">Password</Label>
                                <small className="text-primary-700 dark:text-primary-500 font-medium cursor-pointer">
                                    Auto generate
                                </small>
                            </div>
                            <InputWithOptions
                                type="password"
                                name="patient-password"
                                placeholder="PFqI9WGVIEw4B0Xv"
                                getInputValue={() => {}}
                            />
                        </div>

                        <div className="col-span-2">
                            <Button
                                fullSized
                                onClick={performAction}
                            >
                                Create Account
                            </Button>
                        </div>

                    </form>
                </Modal.Body>
            </Modal>

            {(
                <Toast onClick={() => setShowToast(false)} className={`${showToast ? 'slide-in':'slide-out'} toast-message fixed top-20 right-6 z-40`}>
                    <div className="inline-flex shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                        <span className="icon-send text-primary-700 text-xl" />
                    </div>

                    <hr className="h-5 border border-gray-200 ml-4 mr-3" />

                    <div className="text-sm font-normal">
                        Notification sent successfully.
                    </div>
                </Toast>
            )}
        </>
    )
}

export default PatientFormHandler
