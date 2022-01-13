let button = document.getElementById("checkButton");
let input = document.getElementById("numberInput");
let resultText = document.getElementById("resultText");

function telephoneCheck(str) {
  let pattern = /^1{0,1} {0,1}(\(\d\d\d\)|\d\d\d) {0,1}-{0,1}\d\d\d {0,1}-{0,1}\d\d\d\d$/;
  return pattern.test(str);
}

function check() {
  let telephoneNumber = input.value;
  
  if (telephoneNumber === "") {
    alert("You need to enter a number to evaluate");
  }
  else if (telephoneCheck(telephoneNumber) === true) {
    resultText.textContent = "This is a valid telephone number format";
    resultText.style = "color: green";
  }
  else if (telephoneCheck(telephoneNumber) === false) {
    resultText.textContent = "This is not a valid telephone number format";
    resultText.style = "color: red";
  }
}

button.addEventListener("click", check);