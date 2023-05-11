'use strict';

window.addEventListener('load', () => {


    //*
    console.log('MainScript -> Start');
    const displayBox = document.getElementById('display-box');
    const startButton = document.getElementById('start-button');

    //*
    startButton.addEventListener('click', () => {
        let shapes = [
            new Circle(10),
            new Circle(20),
            new Rectangle(45,28),
            new Rectangle(120,93),
            new Rectangle(150, 112),
        ];

        let k = 0;
        let result = 0;

        for(let s of shapes){
            let x = s.calcSquare();
            result += x;
            displayBox.innerHTML += `<br>${++k}. ${s} >>> площа: ${x.toFixed(2)} квю см`;
        }

        displayBox.innerHTML += '<br>----------------';
        displayBox.innerHTML += `<br>Загальна площа: ${result.toFixed(2)} кв. см`;
    });
});