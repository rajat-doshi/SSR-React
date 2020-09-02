import { cloneDeep } from "lodash";
import moment from "moment";
import axios from "axios";
// get token of loggedIn user
export const getToken = () => {
  return localStorage.getItem("api_token");
};

// get regexp by type
export const getRegExp = (type) => {
  let regx = null;
  switch (type) {
    case "number":
      regx = /^[0-9]*$/;
      break;
    case "email":
      regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      break;
    case "mobile10":
      regx = /^[7896]\d{9}$/;
      break;
    case "mobile14":
      regx = /^(?=.*[0-9])[- +()0-9]{10,14}$/;
      break;
    case "mobile":
      regx = /^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/;
      break;
    case "number":
      regx = /^[0-9]*$/;
      break;
    case "floatNumber":
      regx = /^((\+|-)?(0|([1-9][0-9]*))(\.[0-9][0-9])?)$/;
      break;
    case "url":
      regx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      break;
    case "cvv":
      regx = /^[0-9]{3,4}$/;
      break;
    case "expiryDate":
      regx = /(0[1-9]|10|11|12)\/[0-9]{2}|\./;
      break;
    case "latitude":
      regx = /^(\+|-)?((\d((\.)|\.\d{1,6})?)|(0*?[0-8]\d((\.)|\.\d{1,6})?)|(0*?90((\.)|\.0{1,6})?))$/;
      break;
    case "longitude":
      regx = /^(\+|-)?((\d((\.)|\.\d{1,6})?)|(0*?\d\d((\.)|\.\d{1,6})?)|(0*?1[0-7]\d((\.)|\.\d{1,6})?)|(0*?180((\.)|\.0{1,6})?))$/;
      break;
    case "promoCode":
      regx = /^([a-zA-Z0-9]{1,15})$/;
      break;
    case "Amount":
      regx = /^\d*\.?\d*$/;
      break;
    case "Percentage":
      regx = /^\d{0,2}(\.\d{1,4})?$/;
      break;
    case "password":
      regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      break;
    case "onlyAlphbate":
      regx = /^[a-zA-Z ]*$/;
      break;
    case "alphaNumeric":
      regx = /^([a-zA-Z0-9 _-]+)$/;
      break;
    case "tanNumber":
      regx = /^([A-Z]){4}([0-9]){5}([A-Z]){1}?$/;
      return regx;
      break;
    case "IFSCCode":
      regx = /^[A-Z]{4}0[0-9]{6}$/;
      break;
    case "address":
      regx = /^[a-zA-Z0-9\s,.'-]{3,}$/;
      break;
    case "onlyCharacter":
      regx = /^[a-zA-Z\s]*$/;
      break;
    case "URL":
      regx = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      break;
    default:
      break;
  }
  return regx;
};

// get object of state form
export const getFormDetails = (form, changeValidation) => {
  let failed;
  for (let val in form.errors) {
    const fieldError = form.errors[val];
    if (fieldError) {
      failed = true;
    } else if (fieldError === null && !form[val]) {
      failed = true;
      changeValidation(val, true);
    }
  }
  if (failed) {
    return false;
  } else {
    const cloneObj = cloneDeep(form);
    delete cloneObj["errors"];
    return cloneObj;
  }
};

export const getServerValidation = (errorObj) => {
  let messages = [];
  Object.keys(errorObj).map((val) => {
    errorObj[val].map((arr_val) => messages.push(arr_val));
  });
  return messages.join(",");
};
