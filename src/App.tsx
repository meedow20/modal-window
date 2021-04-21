import React, {useEffect} from 'react';
import './App.scss';
import AppStore from "./store/App";
import {observer} from "mobx-react-lite";
import {Modal} from "./components/modal/Modal";

export const App = observer(() => {

    useEffect(() => {
        if (AppStore.nameError || AppStore.surnameError) {
            AppStore.unsuccessfulValidate();
        } else {
            AppStore.successfulValidate();
        }
    })

    return (
        <div className="container">
            <div className="containerForm">
                {(AppStore.isSelectName && AppStore.nameError) &&
                <div className="errorMessage">{AppStore.nameError}</div>}
                <input value={AppStore.name} onChange={e => AppStore.nameHandler(e)}
                       onBlur={e => AppStore.blurHandler(e)}
                       className="formItem formInput" name="userName" type="text" placeholder="Name"/>
                {(AppStore.isSelectSurname && AppStore.surnameError) &&
                <div className="errorMessage">{AppStore.surnameError}</div>}
                <input value={AppStore.surname} onChange={e => AppStore.surnameHandler(e)}
                       onBlur={e => AppStore.blurHandler(e)}
                       className="formItem formInput" name="userSurname" type="text" placeholder="Surname"/>
                <button className="formItem formButton" disabled={!AppStore.formValidate}
                        onClick={() => AppStore.setModalWindowActive()}>Ready
                </button>
            </div>
            <Modal isOpened={AppStore.isModalWindowActive}/>
        </div>
    );
})
