'use strict';


class Validator {

    constructor() {
        this._loginIsValid = false;
        this._pass1IsValid = false;
        this._pass2IsValid = false;
        this._emailIsValid = false;
        console.log('Validator -> Ok');
    }

    get loginIsValid() {
        return this._loginIsValid;
    }
    get pass1IsValid() {
        return this._pass1IsValid;
    }
    get pass2IsValid() {
        return this._pass2IsValid;
    }
    get emailIsValid() {
        return this._emailIsValid;
    }

    chechLogin(loginValue) {
        let regularExpression = /^[a-zA-Z0-9_]{6,16}$/;
        this._loginIsValid = regularExpression.test(loginValue);
    }

    chechPass1(pass1Value) {
        let regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{8,}$/;
        this._pass1IsValid = regularExpression.test(pass1Value);
    }

    chechPass2(pass1Value,pass2Value) {
        this._pass2IsValid = (pass1Value === pass2Value);
    }

    chechEmail(emailValue) {
        let regularExpression = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        this._emailIsValid = regularExpression.test(emailValue);
    }

    checkAll(){
        return(this._loginIsValid && this._pass1IsValid && this._pass2IsValid && this._emailIsValid); 
    }
}