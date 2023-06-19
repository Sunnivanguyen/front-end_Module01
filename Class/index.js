"use strict";
// assignment 1
let tips = [];

function calcTip(bills) {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips.push(bills[i] * 0.15);
    } else {
      tips.push(bills[i] * 0.2);
    }
  }

  return tips;
}
let bills = [125, 555, 44];

calcTip(bills);

let total = [];

function calcTotal() {
  for (let i = 0; i < bills.length || i < tips.length; i++) {
    total.push(bills[i] + tips[i]);
  }
  return total;
}

calcTotal();

console.log(`bill: ${bills}, tip: ${tips}, total: ${total}`);

// assignment 2
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return this.mass / this.height ** this.height;
  },

  getBMI: function () {
    this.BMI = this.calcBMI();
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },

  getBMI: function () {
    this.BMI = this.calcBMI();
    return this.BMI;
  },
};

function masshigherBMI() {
  return mark.BMI > john.BMI
    ? `${mark.fullName} BMI (${mark.getBMI()}) is higher than ${
        john.fullName
      } BMI (${john.getBMI()}) `
    : `${john.fullName} BMI (${john.getBMI()}) is higher than ${
        mark.fullName
      } BMI (${mark.getBMI()})`;
}

console.log(masshigherBMI());

//assignment 03
// What is a perfect number

function isPerfectNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (sum === num) {
    return true;
  } else {
    return false;
  }
}

function find10perfectNumber() {
  let count = 0;
  while (count < 10) {
    for (let number = 1; ; number++) {
      const perfectNumber = isPerfectNumber(number);
      if (perfectNumber) {
        console.log(`${number} is a perfect number`);
        count++;
      }
    }
  }
}

find10perfectNumber();
