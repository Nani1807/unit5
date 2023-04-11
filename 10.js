// функция, которая проверяет число
function checkNumber(num) {
  // проверяем знак числа
  if (num > 0) {
    document.write(num + ' - положительное число<br>');
  } else if (num < 0) {
    document.write(num + ' - отрицательное число<br>');
  } else {
    document.write(num + ' - ноль<br>');
    return; // если число равно нулю, дальнейшие проверки не имеют смысла
  }

  // проверяем, является ли число простым
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    document.write(num + ' - простое число<br>');
  } else {
    document.write(num + ' - составное число<br>');
  }

  // проверяем, делится ли число на 2, 5, 3, 6, 9 без остатка
  if (num % 2 == 0) {
    document.write(num + ' - делится на 2 без остатка<br>');
  }
  if (num % 5 == 0) {
    document.write(num + ' - делится на 5 без остатка<br>');
  }
  if (num % 3 == 0) {
    document.write(num + ' - делится на 3 без остатка<br>');
  }
  if (num % 6 == 0) {
    document.write(num + ' - делится на 6 без остатка<br>');
  }
  if (num % 9 == 0) {
    document.write(num + ' - делится на 9 без остатка<br>');
  }
}

// вызываем функцию для проверки числа
let num = +prompt('Введите число:');
checkNumber(num);
