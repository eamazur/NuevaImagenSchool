document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('#submit-button');
  const nameInput = document.querySelector('#name');
  const phoneInput = document.querySelector('#tel');
  const phoneErrors = document.querySelectorAll('.form__error');
  const privacyPolicyCheckbox = document.querySelector('#checkbox');
  
  // Validate Phone
  function validatePhone() {
    if (phoneInput.validity.patternMismatch) {
        phoneErrors.forEach(item => {
          item.classList.add('form__error-visible')
        });
    } else {
      phoneErrors.forEach(item => {
        item.classList.remove('form__error-visible')
      });
    }
  }

  function validateForm() {
    validatePhone();

    if (nameInput.validity.valid && phoneInput.validity.valid && privacyPolicyCheckbox.validity.valid) {
      submitButton.classList.remove('disabled');
    } else {
      submitButton.classList.add('disabled');
    }
  }

  nameInput.addEventListener('change', validateForm);
  phoneInput.addEventListener('change', validateForm);
  privacyPolicyCheckbox.addEventListener('change', validateForm);
});