let button = document.getElementById("button-addon2");
let input = document.getElementById("numberInput");

function telephoneCheck(str) {
  let pattern = /^1{0,1} {0,1}(\(\d\d\d\)|\d\d\d) {0,1}-{0,1}\d\d\d {0,1}-{0,1}\d\d\d\d$/;
  return pattern.test(str);
}

function check() {
  let telephoneNumber = input.value;
  input.classList.remove('text-success');
  input.classList.remove('text-danger');
  
  if (telephoneNumber === "") {
    alert("You need to enter a number to evaluate");
  }
  else if (telephoneCheck(telephoneNumber) === true) {
    input.classList.add('text-success');
  }
  else if (telephoneCheck(telephoneNumber) === false) {
    input.classList.add('text-danger');
  }
}

button.addEventListener("click", check);