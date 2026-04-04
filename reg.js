document.getElementById('toLogin').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('registerForm').classList.remove('active');
  document.getElementById('loginForm').classList.add('active');
});

document.getElementById('toRegister').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('loginForm').classList.remove('active');
  document.getElementById('registerForm').classList.add('active');
});

// Регистрация
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var name = document.getElementById('regName').value.trim();
  var phone = document.getElementById('regPhone').value.trim();
  var pass = document.getElementById('regPass').value;
  var conf = document.getElementById('regConf').value;
  var errors = '';

  // Валидация имени (минимум 2 символа)
  if (name.length < 2) {
    errors += 'Введите корректное имя<br>';
  }

  // Валидация телефона (только цифры, минимум 10 символов)
  if (!/^\d{10,}$/.test(phone)) {
    errors += 'Введите корректный телефон (минимум 10 цифр)<br>';
  }

  // Валидация пароля
  if (pass.length < 6) {
    errors += 'Пароль должен быть не менее 6 символов<br>';
  }

  if (pass !== conf) {
    errors += 'Пароли не совпадают<br>';
  }

  document.getElementById('regErrors').innerHTML = errors;

  if (!errors) {
    alert('Регистрация прошла успешно!');
    document.getElementById('registerForm').reset();
  }
});

// Вход
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var name = document.getElementById('loginName').value.trim();
  var pass = document.getElementById('loginPass').value;
  var errors = '';

  // Валидация имени
  if (name.length < 2) {
    errors += 'Введите корректное имя<br>';
  }

  // Валидация пароля
  if (pass.length < 6) {
    errors += 'Введите корректный пароль (минимум 6 символов)<br>';
  }

  document.getElementById('loginErrors').innerHTML = errors;

  if (!errors) {
    alert('Вы вошли в систему!');
    document.getElementById('loginForm').reset();
  }
});