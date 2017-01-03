const SERVER_URI = 'http://127.0.0.1:3000';

class HttpService {

  get(url) {

    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest();

      xhr.open('GET', SERVER_URI + url);

      xhr.onreadystatechange = () => {

        if(xhr.readyState == 4) {
          if(xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.responseText);
          }
        }

      };

      xhr.send();

    });

  }

  post(url, dado) {

    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest();

      xhr.open("POST", SERVER_URI + url, true);

      xhr.setRequestHeader("Content-type", "application/json");

      xhr.onreadystatechange = () => {

        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.responseText);
          }
        }

      };

      // usando JSON.stringifly para converter objeto em uma string no formato JSON.
      xhr.send(JSON.stringify(dado));

    });

  }

}