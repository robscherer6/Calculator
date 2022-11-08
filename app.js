let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function () {
  let clear = document.querySelector('#clear-btn');
  let equal = document.querySelector('.equal');
  let decimal = document.querySelector('.decimal');

  let numbers = document.querySelectorAll('.number');
  let operators = document.querySelectorAll('.operator');

  let previousScreen = document.querySelector('.previous');
  let currentScreen = document.querySelector('.current');

  numbers.forEach((number) => number.addEventListener('click', function (e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  }))



  operators.forEach((op) => op.addEventListener('click', function (e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + ' ' + operator;
    currentScreen.textContent = currentValue;
  }))

  clear.addEventListener('click', function (e) {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent =  '';
    currentScreen.textContent = '';
  })

  equal.addEventListener('click', function () {
    calculate()
  })

})

function handleNumber (num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}

function handleOperator (op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

function calculate () {
  previousValue = Number
}




// function add (a, b) {
//   return a + b;
// }

// function subtract (a, b) {
//   return a - b;
// }

// function multiply (a, b) {
//   return a * b;
// }

// function divide (a, b) {
//   return a / b;
// }

// function operate (operator, num1, num2) {
//   console.log(operator(num1, num2));
// }

// operate(divide, 12, 4)