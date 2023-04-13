//Приймає масив чисел і повертає відсортований масив тільки з елементами що більше ніж середнє значення масива.

// function getSortedArrayAboveAvg(arr) {
//     const avg = arr.reduce((sum, num) => sum + num, 0) / arr.length;
//     const filteredArr = arr.filter(num => num > avg);
//     filteredArr.sort((a, b) => a - b);
//     return filteredArr;
//   }

//   const sortedArr = getSortedArrayAboveAvg([3, 2, 5, 6, 1]);

// function isPalindrome(str) {
//     str = str.replace(/[\W_]/g, '');
//     for (let i = 0; i < str.length / 2; i++) {
//       const leftChar = str[i];
//       const rightChar = str[str.length - 1 - i];
//       if (leftChar !== rightChar && leftChar.toLowerCase() !== rightChar.toLowerCase()) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log(isPalindrome("Привіт Дмитро"));

// function doubleNumber(num, count = 0) {
//     if (num <= 0) {
//       return [2 ** count, count];
//     } else {
//       return doubleNumber(num >> 1, count + 1);
//     }
//   }
  
//   const [result, count] = doubleNumber(7);
//   console.log(result);
//   console.log(count);
  