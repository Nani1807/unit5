let width = 10;
let height = 5;
let rectangle = "";

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    rectangle += "*";
  }
  rectangle += "\n";
}

console.log(rectangle);
