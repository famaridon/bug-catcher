export class BugService {

  public postBug():Promise<string> {
    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', 'http://www.mozilla.org/', true);
      request.onreadystatechange = function (aEvt) {
        if (request.readyState == 4) {
          if(request.status == 200) {
            resolve(request.responseText);
          }
          else {
            reject("Erreur pendant le chargement de la page.\n");
          }
        }
      };
      request.send(null);

    });

    return promise;
  }


}
