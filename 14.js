let obj = {
  Calculate: function(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log("Среднее арифметическое: " + avg);
  }
};

// вызов метода Calculate
obj.Calculate(10, 20, 30); // Среднее арифметическое: 20

