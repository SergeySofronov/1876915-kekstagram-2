import { EndPoints } from './const.js';

export const getData = (onSuccess, onFail, onFinally) => fetch(
  EndPoints.GET,
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onFail(err);
  })
  .finally(onFinally);

export const sendData = (onSuccess, onFail, formData) => fetch(
  EndPoints.SEND,
  {
    method: 'POST',
    credentials: 'same-origin',
    body: new FormData(formData),
  },
)
  .then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
  .catch(onFail);

