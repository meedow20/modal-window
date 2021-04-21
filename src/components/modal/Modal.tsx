import React from "react";
import "./Modal.scss";
import AppStore from "../../store/App"

interface ModalProps {
    isOpened: boolean
}

export const Modal = (props: ModalProps) => {
    return (
        <div className={`${props.isOpened ? 'modal container' : 'modalClose'}`}>
            <div className="modalContainer">
                <div className="buttonCloseModal" onClick={() => AppStore.setModalWindowNotActive()}/>
                <div className="modalContainerContent">
                    Hello, {AppStore.name.toUpperCase()} {AppStore.surname.toUpperCase()}
                </div>
            </div>
        </div>
    )
}