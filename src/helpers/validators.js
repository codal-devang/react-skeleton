export const ValidatorUtils = {
  alphaNumericValidation: (e, country, fieldType) => {
    let regExp;
    let fieldLength;
    if (fieldType === 'zip') {
      switch (country) {
        case 'United States':
          regExp = /[0-9]+/g;
          fieldLength = 5;
          break;
        case 'Canada':
          regExp = /[0-9a-zA-Z]+/g;
          fieldLength = 6;
          break;
        default:
          regExp = /[0-9a-zA-Z]+/g;
          fieldLength = 10;
      }
    } else {
      if (fieldType === 'optional') {
        regExp = /[0-9]+/g;
        fieldLength = 4;
      } else if (fieldType === 'two_digit') {
        regExp = /[0-9]+/g;
        fieldLength = 2;
      } else if (fieldType === 'code') {
        regExp = /[0-9]+/g;
        fieldLength = 3;
      } else {
        regExp = /^[a-zA-Z0-9\-\s]+$/;
        fieldLength = 20;
      }
    }
    const result = regExp.test(e.key);
    if (!result || (e.target.value && e.target.value.length > fieldLength - 1)) {
      e.preventDefault();
    }
  },
};
export default ValidatorUtils;
