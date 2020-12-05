const regexvalidateMobileNumber = new RegExp(/^[0-9]{10}$/);
const regexValidateFormData = new RegExp(/^[a-zA-Z ]*$/);
const regexValidatePincode = new RegExp(/^(\d{4}|\d{6})$/);
const regexValidateEmail = new RegExp(
  /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$$/,
);
const regexvalidatePassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
);
export function validateMobileNumber(mobileNumberValue) {
  if (regexvalidateMobileNumber.test(mobileNumberValue)) {
    return mobileNumberValue;
  } else {
    return false;
  }
}

export function validateFormData(formData) {
  if (regexValidateFormData.test(formData)) {
    return formData;
  } else {
    return false;
  }
}

export function validatePinCode(formData) {
  if (regexValidatePincode.test(formData)) {
    return formData;
  } else {
    return false;
  }
}

export function validateEmail(emailValue) {
  if (regexValidateEmail.test(emailValue)) {
    return emailValue;
  } else {
    return false;
  }
}
export function validatePassword(passwordValue) {
  if (regexvalidatePassword.test(passwordValue)) {
    return passwordValue;
  } else {
    return false;
  }
}
