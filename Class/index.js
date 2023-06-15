function bai_01() {
  const firstName = "academy";
  const lastName = "rikke";
  console.log(`${firstName} ${lastName}`);
}
//  bai_01();

function bai_03() {
  let mathMark = Number(prompt(` nhập điểm toán`));
  let physMark = Number(prompt(` nhập điểm lý`));
  let bioMark = Number(prompt(` nhập điểm sinh`));

  let totalMark = mathMark + physMark + bioMark;
  // console.log(totalMark);
  let averMark = totalMark / 3;
  // console.log(averMark);

  //xuất điểm
  const resutlElement = document.getElementById("result_03");
  console.log("thư element", resutlElement);

  // * show trực tiếp trên html
  resutlElement.innerHTML = ` tổng điểm ${totalMark} và điểm trung bình ${totalMark} `;
  console.log(resutlElement);
}
// bai_03();

// document.getElementById("elementID").innerHTML= "Hello World!";

function bai_04() {
  let inputCelsius = +prompt(` nhập độ C `);

  let calcuFahrenheit = inputCelsius * (9 / 5) + 32;
  console.log(calcuFahrenheit);

  const resutlFahrenheit = document.getElementById("result_04");
  console.log(`thu`, resutlFahrenheit);

  resutlFahrenheit.innerHTML = `${inputCelsius} bằng ${calcuFahrenheit} `;
  console.log(resutlFahrenheit);
}
// bai_04(); sử dụng onclick để gọi đến function thay cho việc gọi đến

function bai_05() {
  let inputA = +prompt(`nhập a `);
  let inputB = +prompt(`nhập b `);

  let acreage = inputA * inputB;
  console.log(acreage);
  let perimeter = inputA + inputB;
  console.log(perimeter);

  const resutlFahrenheit = document.getElementById("result_05");
  console.log(`thu`, resutlFahrenheit);

  resutlFahrenheit.innerHTML = ` diện tích ${acreage}, chi vi ${perimeter} `;
  console.log(resutlFahrenheit);
}
// bai_05();
function bai_06() {
  let inputElectron = +prompt(` chữ điện tiêu thụ `);

  console.log(inputElectron);

  if (isNaN(inputElectron)) {
    return alert(`xin vui lòng nhập số `);
  }

  let bill;
  const rank_1 = 50 * 1700;
  const rank_2 = rank_1 + 50 * 1800;
  const rank_3 = rank_2 + 100 * 1900;
  const rank_4 = rank_3 + 100 * 2000;
  const rank_5 = rank_4 + 100 * 2200;

  if (inputElectron <= 50) {
    bill = inputElectron * 1700;
  } else if (inputElectron <= 100) {
    bill = (inputElectron - 50) * 1800 + rank_1;
  } else if (inputElectron <= 200) {
    bill = (inputElectron - 100) * 1900 + rank_2;
  } else if (inputElectron <= 300) {
    bill = (inputElectron - 200) * 2000 + rank_3;
  } else if (inputElectron <= 400) {
    bill = (inputElectron - 300) * 2200 + rank_4;
  } else {
    bill = (inputElectron - 400) * 2500 + rank_5;
  }

  const resutlFahrenheit = document.getElementById("result_07");
  console.log(`thu`, resutlFahrenheit);

  resutlFahrenheit.innerHTML = ` số chữ điện xài ${inputElectron} kwh với bill ${bill
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND `;
  console.log(resutlFahrenheit);
}

function bai_07() {
  const minus = Number(prompt("nhập số phút cần đếm ngược"));
  const millisecond = minus * 60 * 1000;

  const resutlElement = document.getElementById("result_08");
  // console.log(`thu`,resutlFahrenheit);

  setTimeout(myGreeting, 5000);

  function myGreeting() {
    resutlElement.innerHTML = "Happy Birthday!";
  }
}

function bai_07_1() {
  const minus = +prompt("nhập vào số phút");
  const resutlElement = document.getElementById("result_08_1");
  let totalSecond = minus * 60;

  if (minus > 60 || minus < 0) {
    return alert;
  }

  setInterval(renderCountDown, 1000);

  function renderCountDown() {
    totalSecond--;
    const minusTake = parseInt(totalSecond / 60); // --> lấy số phút  -- lấy phần nguyên
    // const secondRender = totalSecond%60;
    const secondRender = parent((totalSecond / 60 - minusTake) * 60);
    const secondView = secondRender < 10 ? "0" + secondRender : secondRender;
    resutlElement.innerHTML = `${minusTake}:${secondView}`;
  }
}

function bai_08() {
  const year = +prompt("nhập số năm ");
  const resutlElement = document.getElementById("result_09");
  if (
    (year % 4 == 0 && year % 100 != 0 && year % 400 != 0) ||
    (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
  ) {
    resutlElement.innerHTML = `${year} là năm nhuận`;
  } else {
    resutlElement.innerHTML = `${year} ko là năm nhuận`;
  }
}
const resutlElement = document.getElementById("result_10");
const resutlText = document.getElementById("text");

const inputElement = document.getElementById("number");
const inputChange = document.getElementById("change");

const vnd = inputElement.value;
console.log(vnd);
const value = inputChange.value;

console.log(inputChange);
console.log(inputElement);
function bai_09() {
  if (value == "VND") {
    let money = vnd * 10;

    console.log(money);
    resutlElement.innerHTML = money;
  } else {
    const money = vnd * 1;
    resutlElement.innerHTML = money;
  }

  // resutlElement.innerHTML =  inputChange.options[inputChange.selectedIndex].value;
  resutlText.innerHTML = inputElement.value;
}
