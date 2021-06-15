import '../scss/main.scss'; //FIXME: Hapus ini kalo dah mau run di css biasa

$(() => {
  $('#js-alert').hide();
});

const isEmpty = (value) => {
  if (typeof value === 'string') {
    return !value;
  }

  if (typeof value === 'number') {
    return value === 0;
  }
};

const useError = (type) => {
  const setError = () => {
    document
      .querySelector(`[data-control="${type}"]`)
      .classList.add('is-error');
  };

  const removeError = () => {
    document
      .querySelector(`[data-control="${type}"]`)
      .classList.remove('is-error', 'is-success');
  };

  const setSuccess = () => {
    document
      .querySelector(`[data-control="${type}"]`)
      .classList.add('is-success');
  };

  const setText = (string) => {
    document.querySelector(`[data-input="${type}"]`).innerHTML = string;
  };

  return [setError, setText, setSuccess, removeError];
};

const emailChecker = (emailString) => {
  try {
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
  } catch (error) {
    console.log(error);
    return ['Hmmm, something wrong but idk what', false];
  }
};

const countOccurence = (string, ch) => {
  return [...string].reduce((prev, curr) => {
    if (curr === ch) {
      return ++prev;
    }

    return prev;
  }, 0);
};

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

const isValidDomain = (domain) => {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'binus.ac.id'];

  return domain.match(...domains);
};

const usernameChecker = (usernameString) => {
  if (isEmpty(usernameString)) {
    return ['Username cannot be empty', false];
  }

  if (usernameString.length < 6) {
    return ['Must contains at least 6 characters', false];
  }

  return [null, true];
};

const dayChecker = (day) => {
  if (isEmpty(day)) {
    return ['Day cannot be empty', false];
  }

  if (day < 1 || day > 31) {
    return ['Day must in range of 1 - 31', false];
  }

  return [null, true];
};

const monthChecker = (month) => {
  if (isEmpty(month)) {
    return ['Month cannot be empty', false];
  }

  if (month < 1 || month > 12) {
    return ['Month must in range of 1 - 12', false];
  }

  return [null, true];
};

const yearChecker = (year) => {
  if (isEmpty(year)) {
    return ['Year cannot be empty', false];
  }

  if (year < 1970) {
    return ["Wow, you're old", false];
  }

  if (new Date().getFullYear() - year < 13) {
    return ['Minimum age requirement is 13', false];
  }

  return [null, true];
};

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

const confPasswordChecker = (previous, current) => {
  if (isEmpty(current)) {
    return ['?', false];
  }
  if (previous !== current) {
    return ['Password does not match', false];
  }

  return [null, true];
};

const nationalityChecker = (nationality) => {
  if (isEmpty(nationality)) {
    return ['Please choose a nationality', false];
  }

  return [null, true];
};

const form = document.getElementById('js-form');

const email = form.querySelector('#email');
email.addEventListener('change', (e) => {
  const [errorText, errorFlag] = emailChecker(e.target.value);
  const [setClass, setText, setSuccess, resetClass] = useError('email');

  resetClass();
  if (!errorFlag) {
    setClass();
    setText(errorText);
  } else {
    setSuccess();
  }
});

const username = form.querySelector('#username');
username.addEventListener('change', (e) => {
  const [errorText, errorFlag] = usernameChecker(e.target.value);
  const [setClass, setText, setSuccess, resetClass] = useError('username');

  resetClass();
  if (!errorFlag) {
    setClass();
    setText(errorText);
  } else {
    setSuccess();
  }
});

const day = form.querySelector('#day');
day.addEventListener('change', (e) => {
  const [errorText, errorFlag] = dayChecker(+e.target.value);
  const [setClass, setText, setSuccess, resetClass] = useError('dob');

  resetClass();
  if (!errorFlag) {
    setClass();
    setText(errorText);
  } else {
    setSuccess();
  }
});

const month = form.querySelector('#month');
month.addEventListener('change', (e) => {
  const [errorText, errorFlag] = monthChecker(+e.target.value);
  const [setClass, setText, setSuccess, resetClass] = useError('dob');

  resetClass();
  if (!errorFlag) {
    setClass();
    setText(errorText);
  } else {
    setSuccess();
  }
});

const year = form.querySelector('#year');
year.addEventListener('change', (e) => {
  const [errorText, errorFlag] = yearChecker(+e.target.value);
  const [setClass, setText, setSuccess, resetClass] = useError('dob');

  resetClass();
  if (!errorFlag) {
    setClass();
    setText(errorText);
  } else {
    setSuccess();
  }
});

const password = form.querySelector('#password');
let GlobalPass = '';
password.addEventListener('change', (e) => {
  const [errorText, errorFlag] = passwordChecker(e.target.value);
  const [setClass, setText, setSuccess, resetClass] = useError('password');

  resetClass();
  if (!errorFlag) {
    setClass();
    setText(errorText);
  } else {
    setSuccess();
    GlobalPass = e.target.value;
  }
});

const confPassword = form.querySelector('#confirm-password');
confPassword.addEventListener('change', (e) => {
  const [errorText, errorFlag] = confPasswordChecker(
    GlobalPass,
    e.target.value,
  );
  const [setClass, setText, setSuccess, resetClass] =
    useError('confirm-password');

  resetClass();
  if (!errorFlag) {
    setClass();
    setText(errorText);
  } else {
    setSuccess();
  }
});

const nationality = form.querySelector('#nationality');
nationality.addEventListener('change', (e) => {
  const [errorText, errorFlag] = nationalityChecker(e.target.value);

  const [setClass, setText, setSuccess, resetClass] = useError('nationality');

  resetClass();
  if (!errorFlag) {
    setClass();
    setText(errorText);
  } else {
    setSuccess();
  }
});

const terms = form.querySelector('#terms');
terms.addEventListener('change', (e) => {
  const [setClass, setText, setSuccess, resetClass] = useError('terms');

  resetClass();
  if (!e.target.checked) {
    setClass();
    setText('Please check');
  } else {
    resetClass();
    setSuccess();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formControls = [...document.querySelectorAll('.form__control')];

  formControls.pop(); // Remove Button

  if (formControls.every((el) => el.classList.contains('is-success'))) {
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
