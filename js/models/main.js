'use strict';

/** 
 * ===================================================================
 * Поліморфізм - це різноманіття способів перевизначення у похідних
 * класах певних методів базового класу, який вони успадковують. 
 * ===================================================================
 * 1 - Має бути базовий клас та декілька його нащадків.
 * 2 - У нащадках має бути метод, який вже визначений у базовому класі.
 */

window.addEventListener('load', () => {

    console.log('MainScript -> Start');

    // 1 -Визначення дескрипторів елементів:
    const displayBox = document.getElementById('display-box');
    const startButton = document.getElementById('start-button');

    //2 - Створюємо клічові події:
    startButton.addEventListener('click', () => {
        //*
        console.log('startButton -> click');
        // 1
        let animal = new Animal('Ведмежатко');
        console.log(animal);
        displayBox.innerHTML = `${animal}<br>`;
        //2
        let animals = [
            new Bird(), new Dog(), new Fish(), new Frog()
        ];
        // 3
        for (let a of animals) {
            displayBox.innerHTML += `${a}<br>`;
        }
    });

});