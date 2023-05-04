// Рекурсія

// Реаліазація факторіала: 5! = 1 * 2 * 3 * 4* 5
function factorial(n) {
    if (n === 0) { // Умава виходу з рекурсії
        return 1;
    } else {
        return n * factorial(n - 1); // рекурсивний виклик функції
    }
}
// Аналогінча реалізація
const factorial2 = n  => n === 0? 1 : n * factorial(n - 1)

// Реалізація чтисел фібоначчі
function fibonacci(n) {
    if (n <= 1) {
        return n; // Умава виходу з рекурсії
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // рекурсивний виклик функції
    }
}
// Аналогінча реалізація
const fibonacci2 = n => n <= 1? n : fibonacci(n - 1) + fibonacci(n - 2)

// Реалізація суми елементів масиву
function sumArray(arr, i = 0, sum = 0) {
    if (i >= arr.length) {
        return sum; // Умава виходу з рекурсії
    } else {
        return sumArray(arr, i + 1, sum + arr[i]); // рекурсивний виклик функції
    }
}

// Аналогічна реалізація
const sumArray2 = (arr, i = 0, sum = 0) => i >= arr.length? sum : sumArray(arr, i + 1, sum + arr[i])

// Аналогічна реалізація через for

const sumArray3 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

// Аналогічна реалізація через reduce
const sumArray4 = arr => arr.reduce((acc, item) => acc + item, 0)
