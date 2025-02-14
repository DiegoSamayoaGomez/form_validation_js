const myForm = document.getElementById("myForm");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

const postalCode = document.getElementById("postal-code");
const postalCodeError = document.querySelector("#postal-code + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

const confirmPassword = document.getElementById("password-confirm");
const confirmPasswordError = document.querySelector(
  "#password-confirm + span.error"
);

//EMAIL
function showEmailError() {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showEmailError();
  }
});

//COUNTRY
function showCountryError() {
  if (country.validity.valueMissing) {
    // If empty
    countryError.textContent = "You need to enter a Country";
  } else if (country.validity.tooShort) {
    // If the value is too short,
    countryError.textContent = `Your Country should have at least ${country.minLength} characters; you entered ${email.value.length}.`;
  } else if (country.validity.tooLong) {
    // If the value is too long,
    countryError.textContent = `Country name too long ${country.value.length}.`;
  }
}

country.addEventListener("input", () => {
  if (country.validity.valid) {
    countryError.textContent = "";
  } else {
    showCountryError();
  }
});

//POSTAL CODE
function showPostalCodeError() {
  if (postalCode.validity.valueMissing) {
    // If empty
    postalCodeError.textContent = "You need to enter a Postal Code";
  } else if (postalCode.validity.patternMismatch) {
    //Invalid zip code
    postalCodeError.textContent =
      "You need to enter a valid ZIP code (5 digits)";
  } else if (postalCode.validity.tooShort) {
    // If the value is too short,
    postalCodeError.textContent = `Your ZIP code should have at least ${postalCode.minLength} characters; you entered ${email.value.length}.`;
  } else if (postalCode.validity.tooLong) {
    // If the value is too long,
    postalCodeError.textContent = `ZIP code too long ${postalCode.value.length}.`;
  }
}

postalCode.addEventListener("input", () => {
  if (postalCode.validity.valid) {
    postalCodeError.textContent = "";
  } else {
    showPostalCodeError();
  }
});

//PASSWORDS
function checkEqualPasswords(password, confirmPassword) {
  if (password != confirmPassword) {
    confirmPasswordError.textContent = "Password is not equal";
    return true;
  } else {
    return false;
  }
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    // If empty
    passwordError.textContent = "You need to set a password";
  } else if (password.validity.tooShort) {
    // If the value is too short,
    passwordError.textContent = `Your password should have ${password.minLength} characters; you entered ${password.value.length}.`;
  }

  if (confirmPassword.validity.valueMissing) {
    // If empty
    confirmPasswordError.textContent = "You need to set a password";
  } else if (confirmPassword.validity.tooShort) {
    // If the value is too short,
    confirmPasswordError.textContent = `Your password should have ${password.minLength} characters; you entered ${confirmPassword.value.length}.`;
  }
}

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
  } else {
    showPasswordError();
  }
});

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.validity.valid) {
    confirmPasswordError.textContent = "";
  } else {
    showPasswordError();
  }
});

myForm.addEventListener("submit", (event) => {
  // if the email field is invalid
  if (!email.validity.valid) {
    // display an appropriate error message
    showEmailError();
    // prevent form submission
    event.preventDefault();
  }
  // if the email field is invalid
  if (!country.validity.valid) {
    // display an appropriate error message
    showCountryError();
    // prevent form submission
    event.preventDefault();
  }
  // if the ZIP CODE field is invalid
  if (!postalCode.validity.valid) {
    // display an appropriate error message
    showPostalCodeError();
    // prevent form submission
    event.preventDefault();
  }
  // if the PASSWORD field is invalid
  if (!password.validity.valid) {
    // display an appropriate error message
    showPasswordError();
    // prevent form submission
    event.preventDefault();
  }

  if (checkEqualPasswords(password.value, confirmPassword.value)) {
    event.preventDefault();
  }
});
