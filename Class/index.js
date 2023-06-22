// "use strict";

// assignment 04

// Sum of first 30 interger divided to 5
//let sum = 0;

//find 30 first number
// let count = 0;

// for (let number = 0; count < 30; number++) {
//   findNumber(number);
// }

// //Find a number that can be divided to 5 with 0 remainder
// function findNumber(number) {
//   if (number % 5 === 0) {
//     sum += number;
//     console.log(`${number} can be divided to 5 with 0 remainder`);
//     count++;
//   } else {
//     //console.log(`${number} can't be divided to 5 with 0 remainder`);
//     number++;
//   }
// }

// console.log(sum);

//assignment 05
// Fibonacci là một chỉ báo trong phân tích kỹ thuật có nguồn gốc từ một lý thuyết toán học của Leonardo Fibonacci sống ở thế kỷ 12. Theo lý thuyết này, Fibonacci là một chuỗi các chữ số, bắt đầu là 0 và 1, các số phía sau là tổng 2 số đứng liền trước.

// Trông dãy số như thế này: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610…

// let a = 0;
// let b = 1;
// let nextNumber;
// let sum = 0;
// let count = 2;

// while (count <= 20) {
//   sum += a;
//   nextNumber = a + b;
//   a = b;
//   b = nextNumber;
//   console.log("a", a);
//   console.log("b", b);
//   count++;
// }

// a, b, nextnumber

//assignment 06

// let width = +prompt("Type width here", "10");
// let height = +prompt("Type height here", "5");

// function createRectangle(width, height) {
//   let rowElement = "";

//   for (let row = 0; row < height; row++) {
//     rowElement += "<div>";

//     for (let col = 0; col < width; col++) {
//       if (row == 0 || row == height - 1 || col == 0 || col == width - 1) {
//         rowElement += "*";
//       } else {
//         rowElement += "&nbsp;&nbsp";
//       }
//     }

//     rowElement += "</div>";
//   }
//   return rowElement;
// }

// const resultContent = createRectangle(width, height);
// const resultElement = document.querySelector(".assignment");
// console.log(resultContent);
// console.log(resultElement);
// resultElement.innerHTML = resultContent;

//assignment 07

// const radius = prompt("Type your radius here", "100");

// const elementCircle = document.getElementById("circle");
// elementCircle.style.width = `${radius}px`;
// elementCircle.style.height = `${radius}px`;
// elementCircle.style.borderRadius = "50%";
// elementCircle.style.backgroundColor = "rgb(0 36 6)";

//assignment 08

// function createTriangle() {
//   let height = +prompt("Type Triangle's height here", "100");

//   for (let col = 1; col <= height; col++) {
//     let result = "";
//     for (let space = 1; space <= height - col; space++) {
//       result += " ";
//     }
//     for (let row = 1; row < col * 2; row++) {
//       result += "*";
//     }
//     return result;
//   }
// }

// console.log(createTriangle());

//assignment 09

// function reverseString() {
//   //get input
//   const text = prompt("Type here", "Text");
//   //get string length to loop
//   const length = text.length;

//   let newText = "";

//   // loop backward with the first letter is in the last index
//   for (let i = length - 1; i >= 0; i--) {
//     newText += text[i];
//   }
//   return newText;
// }
// console.log(reverseString());

//assignment 09

//get interger input 5 times
let numbers = [];
function getNumber() {
  for (let i = 0; i < 5; i++) {
    let number = +prompt("Type interger here");
    numbers.push(number);
  }
  return numbers;
}

getNumber();

let sum = 0;
function getSum() {
  numbers.forEach((number) => (sum += number));
  return sum;
}

let max = 0;
function getMaxNumber() {
  numbers.forEach((number) => {
    max = max > number ? max : number;
  });
  return max;
}

// function getSum() {
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
console.log(getSum());
console.log(getMaxNumber());
