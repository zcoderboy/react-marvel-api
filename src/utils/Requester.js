function callback(xhr, resolve, reject) {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    resolve(JSON.parse(xhr.response).data.results);
  } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
    reject("An error occured");
  }
}

function sendRequest(url, method, xhr = new XMLHttpRequest()) {
  return new Promise((resolve, reject) => {
    xhr.open(method, url, true);
    xhr.onreadystatechange = () => {
      callback(xhr, resolve, reject);
    };
    xhr.send();
  });
}

export { sendRequest };
