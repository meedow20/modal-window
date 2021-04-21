import {makeAutoObservable} from "mobx";
import React from "react";

enum ErrorMessages {
    nameErrorMessage = "Please enter your name",
    surnameErrorMessage = "Please enter your surname"
}

class AppStore {
    name: string = "";
    surname: string = "";
    isSelectName: boolean = false;
    isSelectSurname: boolean = false;
    nameError: string = ErrorMessages.nameErrorMessage;
    surnameError: string = ErrorMessages.surnameErrorMessage;
    formValidate: boolean = false;
    isModalWindowActive: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.name = e.target.value;
        if (e.target.value !== "") {
            this.nameError = "";
        } else {
            this.nameError = ErrorMessages.nameErrorMessage;
        }
    }

    surnameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.surname = e.target.value;
        if (e.target.value !== "") {
            this.surnameError = "";
        } else {
            this.surnameError = ErrorMessages.surnameErrorMessage;
        }
    }

    blurHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        switch (e.target.name) {
            case 'userName':
                this.isSelectName = true;
                break;
            case 'userSurname':
                this.isSelectSurname = true;
                break;
        }
    }

    successfulValidate = (): void => {
        this.formValidate = true;
    }

    unsuccessfulValidate = (): void => {
        this.formValidate = false;
    }

    setModalWindowActive = (): void => {
        this.isModalWindowActive = true;
    }

    setModalWindowNotActive = (): void => {
        this.isModalWindowActive = false;
    }
}

export default new AppStore();