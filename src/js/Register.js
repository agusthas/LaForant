import '../scss/main.scss'; //FIXME: Hapus ini kalo dah mau run di css biasa

const setErrorStyle = (element) => {
  const errorInputStyle = {
    outline: '2px solid red',
  };

  const errorHelperText = {
    display: 'block',
  };

  Object.assign(element.style, errorInputStyle);
  Object.assign(element.nextElementSibling.style, errorHelperText);
};

const resetErrorStyle = (element) => {
  const resetInputStyle = {
    outline: 'none',
  };

  const resetHelperText = {
    display: 'none',
  };

  Object.assign(element.style, resetInputStyle);
  Object.assign(element.nextElementSibling.style, resetHelperText);
};

document.getElementById('js-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  if (!checkEmail(email.value)) {
    setErrorStyle(email);
    return false;
  }

  const username = document.getElementById('username');
  if (!checkUsername(username.value)) {
    setErrorStyle(username);
    return false;
  }

  const password = document.getElementById('password');
  if (!checkPassword(password.value)) {
    setErrorStyle(password);
    return false;
  }

  const confirmPassword = document.getElementById('confirm-password');
  if (!checkConfirmPassword(password.value, confirmPassword.value)) {
    setErrorStyle(confirmPassword);
    return false;
  }

  const terms = document.getElementById('terms');
  const termsCheckText = document.querySelector('.terms-check');
  if (!terms.checked) {
    termsCheckText.style.display = 'block';
    return false;
  }

  resetErrorStyle(email);
  resetErrorStyle(username);
  resetErrorStyle(password);
  resetErrorStyle(confirmPassword);
  termsCheckText.style.display = 'none';

  window.location.href = '/';
});

const checkEmail = (input) => {
  const atIndex = input.indexOf('@');

  if (atIndex < 1) {
    return false;
  }

  const dot = input.indexOf('.');
  if (dot <= atIndex + 2) return false;

  if (dot === input.length - 1) return false;

  return true;
};

const checkUsername = (input) => {
  return input.length - 1 < 8 ? false : true;
};

const checkPassword = (input) => {
  const numbers = [...'1234567890'];

  if (input.length < 8) {
    return false;
  }

  if (!input.includes(...numbers)) {
    return false;
  }

  return true;
};

const checkConfirmPassword = (password, confirmPassword) => {
  return confirmPassword === password;
};
