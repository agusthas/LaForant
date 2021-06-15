import '../scss/main.scss'; //FIXME: Hapus ini kalo dah mau run di css biasa

$('#js-alert').hide();

/**
 * Check if string is empty or not
 * @param {String | Number} value
 * @returns {Boolean}
 */
const isEmpty = (value) => {
  if (typeof value === 'string') {
    return !value;
  }

  if (typeof value === 'number') {
    return value < 0;
  }
};

/**
 *
 * @param {String} type
 * @returns {Array<Function>}
 */
const useError = (type) => {
  const setError = () => {
    document
      .querySelector(`[data-control="${type}"]`)
      .classList.add('is-error');
  };

  const removeError = () => {
    document
      .querySelector(`[data-control="${type}"]`)
      .classList.remove('is-error');
  };

  const setText = (string) => {
    document.querySelector(`[data-input="${type}"]`).innerHTML = string;
  };

  return [setError, removeError, setText];
};

/**
 * Check for valid Email
 * @param {String} emailString
 * @returns {Array}
 */
const emailChecker = (emailString) => {
  if (isEmpty(emailString)) {
    return ['Email cannot be empty', false];
  }

  if (countOccurence(emailString, '@') < 1) {
    return ["Looks like this isn't an email", false];
  }

  if (countOccurence(emailString, '@') > 1) {
    return ['@ cannot occur more than 2 times', false];
  }

  const [recipient, domainName] = emailString.split('@');

  if (!isValidRecipient(recipient)) {
    return ['Recipient name is invalid', false];
  }

  if (!isValidDomain(domainName)) {
    return ['Domain name is invalid', false];
  }

  return [null, true];
};

/**
 *
 * @param {String} character
 * @param {String} string
 * @returns {Number}
 */

const countOccurence = (string, ch) => {
  return [...string].reduce((prev, curr) => {
    if (curr === ch) {
      return ++prev;
    }

    return prev;
  }, 0);
};

/**
 *
 * @param {String} recipient
 * @returns {Boolean}
 */
const isValidRecipient = (recipient) => {
  const specialCharacters = [
    '!',
    '#',
    '$',
    '%',
    '&',
    "'",
    '*',
    '+',
    '-',
    '/',
    '=',
    '?',
    '^',
    '_',
    '`',
    '.',
    '{',
  ];

  return (
    recipient.length < 64 &&
    !recipient[0].match(...specialCharacters) &&
    !recipient[recipient.length - 1].match(...specialCharacters) &&
    specialCharacters
      .map((ch) => countOccurence(recipient, ch))
      .every((occurence) => occurence < 2)
  );
};

/**
 * Check for domain
 * @param {String} domain
 * @returns {Boolean}
 */
const isValidDomain = (domain) => {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'binus.ac.id'];

  return domain.match(...domains);
};

/**
 * Check for username validity
 * @param {String} usernameString Username Value
 * @return {Array}
 */
const usernameChecker = (usernameString) => {
  if (isEmpty(usernameString)) {
    return ['Username cannot be empty', false];
  }

  if (usernameString.length < 6) {
    return ['Must contains at least 6 characters', false];
  }

  return [null, true];
};

/**
 *
 * @param {Number} day
 * @param {Number} month
 * @param {Number} year
 * @return {Array}
 */
const dobChecker = (day, month, year) => {
  if (isEmpty(day) || isEmpty(month) || isEmpty(year)) {
    return ['Wait, dob cannot be empty', false];
  }

  if (day < 1 || day > 31) {
    return ['Day must in range of 1 - 31', false];
  }

  if (month < 1 || month > 12) {
    return ['Month must in range of 1 - 12', false];
  }

  if (year < 1970) {
    return ["Wow, you're old 🤐", false];
  }

  if (new Date().getFullYear() - year < 13) {
    return ['Minimum age requirement is 13', false];
  }

  return [null, true];
};

/**
 * Check Password
 * @param {String} passwordString
 * @returns {Array}
 */
const passwordChecker = (passwordString) => {
  if (isEmpty(passwordString)) {
    return ['Are you joking?', false];
  }

  if (passwordString.length < 8) {
    return ['Contain at least 8 or more characters', false];
  }

  const specialPassCharacters = [
    '!',
    '#',
    '$',
    '%',
    '&',
    "'",
    '*',
    '+',
    '-',
    '/',
    '=',
    '?',
    '^',
    '_',
    '`',
    '.',
    '{',
  ];

  const numbers = [...'1234567890'];

  if (
    !specialPassCharacters.some((ch) => countOccurence(passwordString, ch) > 0)
  ) {
    return ['Contains at least one or more special characters', false];
  }

  if (!numbers.some((num) => countOccurence(passwordString, num) > 0)) {
    return ['Contains at least one or more number', false];
  }

  return [null, true];
};

/**
 * @param {String} previous previous password input
 * @param {String} current current password input
 * @returns {Array}
 */
const confPasswordChecker = (previous, current) => {
  if (isEmpty(current)) {
    return ['?', false];
  }
  if (previous !== current) {
    return ['Password does not match', false];
  }

  return [null, true];
};

/**
 *
 * @param {String} nationality
 * @returns {Array}
 */
const nationalityChecker = (nationality) => {
  if (isEmpty(nationality)) {
    return ['Please choose a nationality', false];
  }

  return [null, true];
};

/**
 *
 * @param {HTMLElement} element
 * @returns {Array<Function>}
 */
const useValue = (element) => {
  return [
    element.value,
    () => {
      element.value = '';
    },
  ];
};

document.getElementById('js-form').addEventListener('submit', (e) => {
  e.preventDefault();
  let isValidInput = true;

  const form = e.target;
  // Get all input elements
  const [email, resetEmail] = useValue(form.querySelector('#email'));
  const [username, resetUsername] = useValue(form.querySelector('#username'));
  const [day, resetDay] = useValue(form.querySelector('#day'));
  const [month, resetMonth] = useValue(form.querySelector('#month'));
  const [year, resetYear] = useValue(form.querySelector('#year'));
  const [password, resetPassword] = useValue(form.querySelector('#password'));
  const [confPassword, resetConfPassword] = useValue(
    form.querySelector('#confirm-password'),
  );
  const [nationality, resetNationality] = useValue(
    form.querySelector('#nationality'),
  );
  const terms = form.querySelector('#terms');

  const [errorEmail, emailFlag] = emailChecker(email);
  const [errorUsername, usernameFlag] = usernameChecker(username);
  const [errorDob, dobFlag] = dobChecker(+day, +month, +year);
  const [errorPassword, passwordFlag] = passwordChecker(password);
  const [errorConf, confFlag] = confPasswordChecker(password, confPassword);
  const [errorNationality, nationalityFlag] = nationalityChecker(nationality);

  const [setErrorEmail, removeErrorEmail, setErrorEmailText] =
    useError('email');
  const [setErrorUsername, removeErrorUsername, setErrorUsernameText] =
    useError('username');
  const [setErrorDob, removeErrorDob, setErrorDobText] = useError('dob');
  const [setErrorPassword, removeErrorPassword, setErrorPasswordText] =
    useError('password');
  const [
    setErrorConfPassword,
    removeErrorConfPassword,
    setErrorConfPasswordText,
  ] = useError('confirm-password');
  const [setErrorNationality, removeErrorNationality, setErrorNationalityText] =
    useError('nationality');
  const [setErrorTerms, removeErrorTerms, setErrorTermsText] =
    useError('terms');

  if (!emailFlag) {
    setErrorEmail();
    setErrorEmailText(errorEmail);
    isValidInput = false;
  }

  if (!usernameFlag) {
    setErrorUsername();
    setErrorUsernameText(errorUsername);
    isValidInput = false;
  }

  if (!dobFlag) {
    setErrorDob();
    setErrorDobText(errorDob);
    isValidInput = false;
  }

  if (!passwordFlag) {
    setErrorPassword();
    setErrorPasswordText(errorPassword);
    isValidInput = false;
  }

  if (!confFlag) {
    setErrorConfPassword();
    setErrorConfPasswordText(errorConf);
    isValidInput = false;
  }

  if (!nationalityFlag) {
    setErrorNationality();
    setErrorNationalityText(errorNationality);
    isValidInput = false;
  }

  if (!terms.checked) {
    setErrorTerms();
    setErrorTermsText('Please check');
    isValidInput = false;
  }

  if (isValidInput) {
    resetEmail();
    resetUsername();
    resetDay();
    resetMonth();
    resetYear();
    resetPassword();
    resetConfPassword();
    resetNationality();

    removeErrorEmail();
    removeErrorUsername();
    removeErrorDob();
    removeErrorPassword();
    removeErrorConfPassword();
    removeErrorNationality();
    removeErrorTerms();

    let count = $('#js-redirect-counter').data('count');
    $('#js-redirect-counter').html(count);
    $('#js-alert').slideDown(function () {
      const interval = setInterval(() => {
        count--;
        $('#js-redirect-counter').html(count);

        if (count === 0) {
          clearInterval(interval);
          window.location.href = '/';
        }
      }, 1000);
    });
  }
});

// Masking Password
const eyeIcons = document.querySelectorAll('.fas.fa-eye');

eyeIcons.forEach((eye) => {
  eye.addEventListener('click', (e) => {
    e.stopPropagation();

    const input = document.querySelector(e.target.dataset.inputSibling);

    input.type = input.type === 'password' ? 'text' : 'password';
    e.target.classList.toggle('fa-eye-slash');
  });
});
