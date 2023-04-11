var MyQuery = (function() {
  function FindClass(className) {
    // Знайти всі елементи з вказаним класом
    var elements = document.getElementsByClassName(className);
    // Перетворити HTML-колекцію в масив
    var arr = Array.prototype.slice.call(elements);
    return arr;
  }

  // Повернути об'єкт, що містить функцію FindClass
  return {
    FindClass: FindClass
  };
})();
var arr = MyQuery.FindClass("redButton");
console.log(arr); // виведе масив елементів з класом "redButton"