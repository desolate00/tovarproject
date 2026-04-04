// Скрипт для переключения категорий
const buttons = document.querySelectorAll('.category-button');
const containers = document.querySelectorAll('.cards-container');

// По умолчанию показываем первую категорию
document.querySelector('.sofas').classList.add('active');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    // Убираем активные классы
    containers.forEach(c => c.classList.remove('active'));
    // Добавляем активный класс выбранной категории
    document.querySelector('.' + category).classList.add('active');
  });
});