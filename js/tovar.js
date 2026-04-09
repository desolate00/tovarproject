const buttons = document.querySelectorAll('.category-button');
const containers = document.querySelectorAll('.cards-container');

// По умолчанию показываем все категории
containers.forEach(c => c.classList.add('active'));

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');

    // Убираем активные классы у всех контейнеров
    containers.forEach(c => c.classList.remove('active'));

    // Если выбрана категория "Все", показываем все товары
    if (category === 'vse') {
      containers.forEach(c => c.classList.add('active'));
    } else {
      // Иначе показываем только выбранную категорию
      document.querySelector('.' + category).classList.add('active');
    }
  });
});