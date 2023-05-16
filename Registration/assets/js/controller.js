'use strict'


class Controller {

    constructor() {
        this._login = document.getElementById('login');
        this._pass1 = document.getElementById('pass1');
        this._pass2 = document.getElementById('pass2');
        this._email = document.getElementById('email');

        this._loginMess = document.getElementById('login-mess');
        this._pass1Mess = document.getElementById('pass1-mess');
        this._pass2Mess = document.getElementById('pass2-mess');
        this._emailMess = document.getElementById('email-mess');

        this._form = document.getElementById('reg-form');
        this._validator = new Validator();
        console.log('Controller -> OK');
    }

    activateLogin() {
        console.log('submitLogin -> Ok');
        this._login.addEventListener('blur', () => {
            this._validator.chechLogin(this._login.value);
            if (this._validator.loginIsValid) {
                this._login.style.boxShadow = '0px 0px 10px green';
                this._loginMess.innerText = '';
            } else {
                this._login.style.boxShadow = '0px 0px 10px red';
                this._loginMess.innerText = '\
                Логін має бути довжиною від 6 до 16 символів.\
                серед яких дозволені маленькі та великі літери\
                або цифри, а також - символ _\
                ';
            }
        });
    }

    activatePass1() {
        console.log('passActivator -> Ok');
        this._pass1.addEventListener('blur', () => {
            this._validator.chechPass1(this._pass1.value);
            if (this._validator.pass1IsValid) {
                this._pass1.style.boxShadow = '0px 0px 10px green';
                this._pass1Mess.innerText = '';
            } else {
                this._pass1.style.boxShadow = '0px 0px 10px red';
                this._pass1Mess.innerText = '\
                Пароль має бути довжиною не менше 8 символів.\
                серед яких дозволені маленькі та великі літери\
                або цифри, а також - символ _,при чому має бути\
                хоча б одна маленька літера,хоча б одна - велика\
                та хоча б одна цифра!\
                ';
            }
        });
    }

    activatePass2() {
        console.log('pass2Activator -> Ok');
        this._pass2.addEventListener('blur', () => {
            this._validator.chechPass2(this._pass1.value, this._pass2.value);
            if (this._validator.pass2IsValid) {
                this._pass2.style.boxShadow = '0px 0px 10px green';
                this._pass2Mess.innerText = '';
            } else {
                this._pass2.style.boxShadow = '0px 0px 10px red';
                this._pass2Mess.innerText = 'Введені паролі не співпадають!';
            }
        });
    }

    activateEmail() {
        console.log('emailActivator -> Ok');
        this._email.addEventListener('blur', () => {
            this._validator.chechEmail(this._email.value, );
            if (this._validator.emailIsValid) {
                this._email.style.boxShadow = '0px 0px 10px green';
                this._emailMess.innerText = '';
            } else {
                this._email.style.boxShadow = '0px 0px 10px red';
                this._emailMess.innerText = 'Адреса електронної пошти не відповідає стандарту!';
            }
        });
    }

    activateSubmit() {
        console.log('submitActivator -> Ok');
        this._form.addEventListener('submit', () => {
            console.log('submit -> click');
            if (this._validator.checkAll()) {
                this._form.submit();
            } else {
                alert('Відправка даних заблокована валідатором!');
            }
        });
    }

}