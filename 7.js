// задаем размерность массива
let n = 10;

// создаем пустой массив и заполняем его случайными числами от 1 до 100
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}

// выводим наибольшее и наименьшее значение массива
let max = arr[0];
let min = arr[0];
for (let i = 1; i < n; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
document.write('Наибольшее значение: ' + max + '<br>');
document.write('Наименьшее значение: ' + min + '<br>');

// выводим общую сумму элементов массива
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i];
}
document.write('Общая сумма элементов: ' + sum + '<br>');

// выводим среднее арифметическое всех элементов массива
let avg = sum / n;
document.write('Среднее арифметическое всех элементов: ' + avg + '<br>');

// выводим все нечетные значения массива
document.write('Все нечетные значения: ');
for (let i = 0; i < n; i++) {
  if (arr[i] % 2 !== 0) {
    document.write(arr[i] + ' ');
  }
}
