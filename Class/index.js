"use strict";
// assignment 01
function assignment_01() {
  const str = prompt("Type your quote here to style");

  function isUpperCase() {
    let newLetter = "";
    for (let letter of str) {
      newLetter +=
        letter.toUpperCase() === letter
          ? letter.toLowerCase()
          : letter.toUpperCase();
    }
    return newLetter;
  }

  let newLetter = isUpperCase();
  console.log(newLetter);

  const elementContent = document.getElementById("input-field");
  elementContent.innerHTML = newLetter;
}

//assigment 02

function assignment_02() {
  const inputElement = document.getElementById("word-input");
  const inputValue = inputElement.value;

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
    .then((response) => response.json())
    .then((word) => {
      let audio = "";
      let ipa = "";
      const phonetics = word[0].phonetics;
      for (let phonetic of phonetics) {
        console.log(phonetic);

        if (phonetic.audio) {
          audio = phonetic.audio;
          ipa = phonetic.text;
        }
      }
      document.getElementById("sound").src = `${audio}`;
      document.getElementById("ipa").innerHTML = ipa;
      const wordMeaning = word[0]["meanings"][0].definitions[0].definition;
      document.getElementById("word-meaning").innerHTML = wordMeaning;
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

//assignment 03

function assignment_03() {
  let form = document.forms["my-form"];
  form.addEventListener("submit", getValues);

  function getValues(event) {
    event.preventDefault();
    let formData = {
      name: this.name.value,
    };
    console.log(formData.name);
  }
}
