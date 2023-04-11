// создаем пустой двумерный массив размерностью 5x5 и заполняем его случайными числами от -10 до 10
let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = [];
  for (let j = 0; j < 5; j++) {
    arr[i][j] = Math.floor(Math.random() * 21) - 10;
  }
}

// заменяем числа по главной диагонали на 0 и 1
for (let i = 0; i < 5; i++) {
  if (arr[i][i] > 0) {
    arr[i][i] = 1;
  } else if (arr[i][i] < 0) {
    arr[i][i] = 0;
  }
}

// выводим полученный массив
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    document.write(arr[i][j] + ' ');
  }
  document.write('<br>');
}
