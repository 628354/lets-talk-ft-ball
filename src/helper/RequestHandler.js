import Axios from "axios";
/**
 *
 * @param  url, method, data, ....
 * @Description fetch the data from the api based on the type of request
 * @returns api response
 */
export const apiCall = async (URL, METHOD, DATA) => {
  return new Promise((resolve, reject) => {
    let hasError = false;
    Axios({
      method: METHOD,
      headers: {
        "Content-Type": "application/json",
      },
      url: URL,
      data: JSON.stringify(DATA),
    })
      .then((response) => {
        resolve({
          status: response.status,
          response: response,
          hasError,
        });
      })
      .catch((err) => {
        hasError = true;
        resolve({
          status: err,
          response: err,
          hasError,
        });
      });
  });
};
export const apiCallFile = async (URL, METHOD, DATA) => {
  return new Promise((resolve, reject) => {
    let hasError = false;
    Axios({
      method: METHOD,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: URL,
      data: DATA,
    })
      .then((response) => {
        resolve({
          status: response.status,
          response: response,
          hasError,
        });
      })
      .catch((err) => {
        hasError = true;
        resolve({
          status: err,
          response: err,
          hasError,
        });
      });
  });
};
