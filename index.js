// Методи роботи з масивами
// оголошення пустого масиву
let arr = []

// push(): додає елемент в кінець масиву
arr = [1, 2, 3] // записуємо в масив числа
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// pop(): видаляє останній елемент масиву і повертає його
arr = [1, 2, 3]; // перезаписуємо числа
const lastElement = arr.pop();
console.log(lastElement); // 3
console.log(arr); // [1, 2]

// shift(): видаляє перший елемент масиву і повертає його

const firstElement = arr.shift();
console.log(firstElement); // 1
console.log(arr); // [2, 3]

// unshift(): додає елемент в початок масиву
arr = [1, 2, 3]; // перезаписуємо числа
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

//slice(): повертає новий масив, який містить підмасив від заданого індексу до заданого індексу (не включно)
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const slicedArray = arr.slice(1, 4);
console.log(slicedArray); // [2, 3, 4]

// splice(): додає або видаляє елементи з масиву та повертає видалені елементи
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const removedElements = arr.splice(1, 2);
console.log(removedElements); // [2, 3]
console.log(arr); // [1, 4, 5]

// concat(): злиття масивів в один
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const concatenatedArray = arr1.concat(arr2, arr3);
console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]

// join(): повертає рядок, який містить всі елементи масиву, розділені заданим роздільником
arr = [1, 2, 3]; // перезаписуємо числа
const joinedString = arr.join(', ');
console.log(joinedString); // "1, 2, 3"

// reverse(): змінює порядок елементів масиву на протилежний
arr = [1, 2, 3]; // перезаписуємо числа
arr.reverse();
console.log(arr); // [3, 2, 1]

// filter(): створює новий масив, який містить елементи, що відповідають заданому умові (функції зворотного виклику)
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const filteredArray = arr.filter((element) => {
    return element > 2;
});
console.log(filteredArray); // [3, 4, 5]

// map(): створює новий масив, який містить результати виклику заданої функції для кожного елементу масиву
arr = [1, 2, 3]; // перезаписуємо числа
const mappedArray = arr.map((element) => {
    return element * 2;
});
console.log(mappedArray); // [2, 4, 6]

// reduce(): застосовує задану функцію до всіх елементів масиву і повертає єдине значення
// Функція має два параметри: аккумулятор і поточний елемент масиву
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum); // 15

// forEach(): викликає задану функцію для кожного елементу масиву
arr = [1, 2, 3]; // перезаписуємо числа
arr.forEach((element) => {
    console.log(element);
});
// Виведе в консоль:
// 1
// 2
// 3

// indexOf(): повертає індекс першого елемента масиву, що відповідає заданому значенню, або -1, якщо елемент не знайдено
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const index = arr.indexOf(3);
console.log(index); // 2

// lastIndexOf(): повертає індекс останнього елемента масиву, що відповідає заданому значенню, або -1, якщо елемент не знайдено
arr = [1, 2, 3, 3, 4, 5]; // перезаписуємо числа
const lastIndex = arr.lastIndexOf(3);
console.log(lastIndex); // 3

// find(): повертає перший елемент масиву, що відповідає заданій умові (функції зворотного виклику)
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const foundElement = arr.find((element) => {
    return element > 3;
});
console.log(foundElement); // 4

// findIndex(): повертає індекс першого елемента масиву, що відповідає заданій умові (функції зворотного виклику), або -1, якщо елемент не знайдено
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const firstIndex = arr.findIndex((element) => {
    return element > 3;
});
console.log(firstIndex); // 3

// Приклад встроєного метода filter і своєю реалізацією цього метода через for
// Реалізація через for
function filterArray(array, callback) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}
const array1 = [1, 2, 3, 4, 5];

const myFilteredArray1 = filterArray(array1, (element) => {
    return element > 3;
});

console.log(myFilteredArray1); // [4, 5]

// Реалізація через метод filter
const array2 = [1, 2, 3, 4, 5];

const myFilteredArray2 = array2.filter((element) => {
    return element > 3;
});

console.log(myFilteredArray2); // [4, 5]
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
// цикли for | while

// масив числел
const numbersArray = [1, 3, 5, 6, 3, 2, 19, 34, 13]

// масив об'єктів (user)
// для прикладу вказав поле pass(пароль) у вікритому вигляді, так робити не можна, паролі тільки в зашифрованому вигляді
const users = [
    {login: "alex01", pass: "we123rf213as"},
    {login: "dmytro01", pass: "w12rf213as"},
    {login: "vania21", pass: "we2ras2ds"},
    {login: "leonid03", pass: "wasd1rf213as"},
    {login: "sania1", pass: "we1r1f213as"},
    {login: "vito1", pass: "w4erf213as"},
    {login: "admin", pass: "w4erf213a43s"},
]

// Стрілочна функація (ES6) яка приймає масив і виводить його елемнети на html сторінку
// В цьому випадку функція не може працювати з полями об'єкта і може виводити просто елемети
const documentPrintFor = (array) => {
    for (let i = 0; i < numbersArray.length; i++) {
        document.write(array[i] + " ")
    }
}

// Аналогіна реалізація через while
const documentPrintWhile = (array) => {
    let index = 0;
    while (index < array.length) {
        document.write(array[index] + " ")
        index++
    }
}

// Аналогіна реалізація через do while
const documentPrintDoWhile = (array) => {
    let index = 0;
    do {
        document.write(array[index] + " ")
        index++
    } while (index < array.length)
}

// Стрілочна функція яка приймає масив і виводить його елементи на html сторінку в зворотньому порядку
const documentReversePrint = (array) => {
    for (let i = array.length; i !== 0; i--) {
        document.write(array[i] + " ")
    }
}

// Фунція (Function Declaration) яка повертає користувачів і вміє працювати з об'єктом user
function getUsers(usersArray) {
    for (let user of usersArray) {
        // Перевірка на адміна
        if (user.login === "admin") {
            continue // за допомогою continue пропускаємо ітерацію
        }
        console.log(user.login, user.pass)
    }
}

// Реалізація з ключовим словом break, функція що шукає адміна
function searchAdminBreak(usersArray) {
    for (let user of usersArray) {
        // Перевірка на адміна
        if (user.login === "admin") {
            console.log(user.login, user.pass)
            break // за допомогою break закінчуємо роботу цикла
        }
    }
}

// Функція яка ложить додаток за допомогою нескінченного цикла
/*
    Краще його не запускати!
*/
function endlessCycle() {
    // зовнішній нескінченний цикл
    for (; ;) {
        // перший внутрішній нескінченний цикл
        while (true) {
            // другий внутрішній нескінченний цикл
            do {
            } while (true)
        }
    }
}

// Приклад реалізації вкладених циклів, реалізація таблиці множеня
function printMatrix() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            output += " " + i * j
            if (i * j < 10) {
                output += " ";
            }
        }
        console.log(output)
        output = '';
    }
}
// Приклади роботи з об'єктом Math

// З переліку аргументів (10, 12, 34) обирає найменший і повертає його (саме тому ми можемо присвоїти його змінній)
const minValue = Math.min(10, 12, 34); // 10

// З переліку аршументів (10, 12, 34) обирає найбільший і повертає його (саме тому ми можемо присвоїти його змінній)
const maxValue = Math.max(10, 12, 34); // 34

// Округлення числа до найбільшого цілого
const mathRound1 = Math.round(3.5); // 4
const mathRound2 = Math.round(3.4); // 3

// Округлення числа вниз
const roundDown = Math.floor(3.9); // 3

// Округлення числа вниз
const roundUp = Math.ceil(3.1); // 4

// Повертає PI
const valPi = Math.PI // 3.14...
// Отримання випадкового числа від 0 до 1
const randomNum = Math.random(); // 0.3123123, 0.534534, ...

// Функція (ES6 Lambda function) отримання випадкового числа в діапазоні
const getRandomNumber = (minValue, maxValue) => {
    // Math.random повертає число у вигляді 7.34535354, огорнути у Math.round щоб округлило до 7
    return Math.round(Math.random() * (maxValue - minValue) + minValue); // Поверне число в діапазоні
}

// Варіанти оптимізації
const getRandomNumberOptimal = (minValue, maxValue) => Math.round(Math.random() * (maxValue - minValue) + minValue);

// Функція (Function declaration) повертає найбільше число в масиві
function maxValueInArray(array){
    return Math.max(array) // повертає найбільше значення масиву array
}    
