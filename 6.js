// задаем высоту и ширину прямоугольника
let height = 5;
let width = 10;

// отрисовываем прямоугольник с помощью двойного цикла
for (let i = 0; i < height; i++) {
  let row = '';
  for (let j = 0; j < width; j++) {
    row += '*';
  }
  document.write(row + '<br>');
}
// задаем высоту треугольника
let height1 = 7;

// отрисовываем треугольник с помощью двойного цикла
for (let i = 0; i < height1; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += '*';
  }
  document.write(row + '<br>');
}
// задаем высоту треугольника
let height2 = 7;

// отрисовываем треугольник с помощью двойного цикла
for (let i = 0; i < height2; i++) {
  let row = '';
  for (let j = 0; j < height2 - i; j++) {
    row += '&nbsp;';
  }
  for (let k = 0; k <= i * 2; k++) {
    row += '*';
  }
  document.write(row + '<br>');
}
// задаем высоту ромба
let height3 = 7;

// отрисовываем ромб с помощью двойного цикла
for (let i = 0; i < height3; i++) {
  let row = '';
  for (let j = 0; j < height3 - i; j++) {
    row += '&nbsp;';
  }
  for (let k = 0; k <= i * 2; k++) {
    row += '*';
  }
  document.write(row + '<br>');
}
for (let i = height3 - 2; i >= 0; i--) {
  let row = '';
  for (let j = 0; j < height3 - i; j++) {
    row += '&nbsp;';
  }
  for (let k = 0; k <= i * 2; k++) {
    row += '*';
  }
  document.write(row + '<br>');
}

