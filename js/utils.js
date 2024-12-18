import { KeyCode } from './const.js';

export const getRandomPositiveInteger = (lowerValue = 0, upperValue = 0) => {
  const lower = Math.ceil(Math.min(Math.abs(lowerValue), Math.abs(upperValue)));
  const upper = Math.floor(Math.max(Math.abs(lowerValue), Math.abs(upperValue)));

  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

export const getUniqueUIntArray = (lowerBorder = 0, upperBorder = 0) => {
  const arrayTotalNumbers = [];
  const arrayRandomNumbers = [];
  let lower = Math.ceil(Math.min(Math.abs(lowerBorder), Math.abs(upperBorder)));
  const upper = Math.floor(Math.max(Math.abs(lowerBorder), Math.abs(upperBorder)));
  let totalNumbers = Math.abs(upper - lower) + 1;
  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + lower);
  }
  while (arrayTotalNumbers.length) {
    lower = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
    arrayRandomNumbers.push(arrayTotalNumbers[lower]);
    arrayTotalNumbers.splice(lower, 1);
  }
  return arrayRandomNumbers;
};

export const getRandomArrayPart = function (array, length = 0) {
  if (Array.isArray(array) && (!isNaN(parseInt(length, 10)))) {
    const index = getRandomPositiveInteger(0, array.length - 1);
    const maxLength = index + length;

    if (length > array.length) {
      return array;
    }

    if (maxLength > array.length) {
      return array.slice(index).concat(array.slice(0, Math.abs(array.length - maxLength)));
    }

    return array.slice(index, index + length);
  }

  return [];
};

export const getRandomMixedData = (data = [], length = 0) => {
  const mixedData = [];
  while (data.length && length--) {
    const item = Math.round(Math.random() * (data.length - 1));
    mixedData.push(data[item]);
    data.splice(item, 1);
  }

  return mixedData;
};

export const isEscapeKey = (evt) => (evt.key === KeyCode.ESC);

export const pluralize = (number, textForms) => textForms[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];

export const disableButton = (button, text) => {
  button.disabled = true;
  button.textContent = text;
};

export const enableButton = (button, text) => {
  button.disabled = false;
  button.textContent = text;
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
