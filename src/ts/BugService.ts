export class BugService {

  public postBug(bug: Bug):Promise<string> {
    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('POST', 'http://localhost:3080/', true);
      request.setRequestHeader("Content-type", "application/json");
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
      request.send(JSON.stringify(bug));
    });
    return promise;
  }
}

export class Bug{
  public mail: string;
  public title: string;
  public description: string;
  public image: string;

  constructor(mail: string, title: string, description: string, image: HTMLCanvasElement){
    this.mail = mail;
    this.title = title;
    this.description = description;
    // this.image = image.toDataURL('image/jpeg', 0.3);;
  }
}
