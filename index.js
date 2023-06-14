"use strict";

const userName = prompt("What's your name?");
const gender = prompt("Are you female or male or gay?");
const age = prompt("How old are you?");

if (gender === "male") {
  if (+age >= 18) {
    alert(`${userName} are an adult man.`);
  } else if (age < 18) {
    alert(`${userName} are a boy.`);
  }
} else if (gender === "female") {
  if (+age >= 18) {
    alert(`${userName} are an adult woman.`);
  } else if (age < 18) {
    alert(`${userName} are a girl.`);
  }
} else if (gender === "gay") {
  if (+age >= 18) {
    alert(`${userName} are an adult gay.`);
  } else if (age < 18) {
    alert(`${userName} are a gay kid.`);
  }
}
