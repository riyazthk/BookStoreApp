const regexvalidateMobileNumber = new RegExp(/^[0-9]{10}$/);
const regexValidateFormData = new RegExp(/^[a-zA-Z ]*$/);
const regexValidatePincode = new RegExp(/^(\d{4}|\d{6})$/);
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
