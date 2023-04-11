const createParagraphButton = document.getElementById('create-paragraph');
const paragraphContainer = document.getElementById('paragraph-container');
let paragraphCount = 0;

function createParagraph() {
  // Створення нового параграфу
  const paragraph = document.createElement('p');
  paragraph.textContent = `Параграф #${++paragraphCount}`;

  // Додавання параграфу до контейнера
  paragraphContainer.appendChild(paragraph);

  // Перевірка, чи ми досягли ліміту параграфів, які ми хочемо створити
  if (paragraphCount === 10) {
    // Видалення обробника події на кнопці
    createParagraphButton.removeEventListener('click', createParagraph);
  }
}

// Додавання обробника події на кнопку
createParagraphButton.addEventListener('click', createParagraph);
