import { EndPoint } from './const.js';

export const getData = (onSuccess, onFail, onFinally) => fetch(
  EndPoint.GET,
  {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then(onSuccess)
  .catch(onFail)
  .finally(onFinally);

export const sendData = (body, onSuccess, onFail, onFinally) => fetch(
  EndPoint.SEND,
  {
    method: 'POST',
    credentials: 'same-origin',
    body,
  })
  .then((response) => response.ok ? onSuccess() : onFail())
  .catch(onFail)
  .finally(onFinally);
