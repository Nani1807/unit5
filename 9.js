// функция сложения
function Add(a, b) {
  let result = a + b;
  document.write('Результат сложения: ' + result + '<br>');
}

// функция вычитания
function Sub(a, b) {
  let result = a - b;
  document.write('Результат вычитания: ' + result + '<br>');
}

// функция умножения
function Mul(a, b) {
  let result = a * b;
  document.write('Результат умножения: ' + result + '<br>');
}

// функция деления
function Div(a, b) {
  if (b == 0) {
    document.write('Ошибка: деление на ноль!<br>');
  } else {
    let result = a / b;
    document.write('Результат деления: ' + result + '<br>');
  }
}

// запрашиваем у пользователя значения и операцию
let a = +prompt('Введите первое число:');
let b = +prompt('Введите второе число:');
let operation = prompt('Выберите операцию (+, -, *, /):');

// вызываем соответствующую функцию в зависимости от выбранной операции
switch (operation) {
  case '+':
    Add(a, b);
    break;
  case '-':
    Sub(a, b);
    break;
  case '*':
    Mul(a, b);
    break;
  case '/':
    Div(a, b);
    break;
  default:
    document.write('Ошибка: неправильно выбрана операция!<br>');
    break;
}