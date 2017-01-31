import { Dialog } from "./Dialog";
import { Launcher } from "./Launcher";
import { BugOverlay } from "./BugOverlay";
import { BugService, Bug } from "./BugService";

export class BugWritter extends Dialog{

  /**
  * the html to display
  **/
  public template = `
  <div class="panel panel-primary">
    <div class="panel-heading">Report a bug : </div>
    <div class="panel-body">
      <form>
        <div class="form-group">
          <input type="email" class="form-control" id="email" placeholder="Email (mandatory)">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="title" placeholder="Title (mandatory)">
        </div>
        <div class="form-group">
          <textarea type="text" class="form-control" id="description" placeholder="Description"> </textarea>
        </div>
        <button type="reset" class="btn btn-default">Abort</button>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  </div>
  `;

  private overlay: BugOverlay;
  private node: HTMLElement;
  private launcher: Launcher;
  private bugService: BugService;

  constructor(launcher: Launcher) {
    super();
    this.launcher = launcher;
    this.overlay = new BugOverlay();
    this.bugService = new BugService();
  }

  public show(){
    /* first hide the launcher else we have it on screen shot*/
    this.launcher.hide();
    this.overlay.show();

    /* append the writter */
    this.node = document.createElement("div");
    this.node.id = "bug-catcher-writter";
    this.node.classList.add("bug-catcher");
    this.node.classList.add("writter");
    this.node.appendChild(this.buildTemplate(this.template));

    document.body.appendChild(this.node);

    this.node.querySelector("button[type=submit]").addEventListener("click", () => this.send());
    this.node.querySelector("button[type=reset]").addEventListener("click", () => this.hide());

  }

  public send():void{
    let bug = new Bug(this.getEmail(),this.getTitle(), this.getDescription(), this.overlay.getCanvas());
    let promise = this.bugService.postBug(bug);
    promise.then((valeur) => this.onSendSucess(valeur));
    promise.catch((exception) => this.onSendError(exception));
  }

  private getEmail():string {
    return (<HTMLInputElement>this.node.querySelector("#email")).value;
  }

  private getTitle():string {
    return (<HTMLInputElement>this.node.querySelector("#title")).value;
  }

  private getDescription():string {
    return (<HTMLInputElement>this.node.querySelector("#description")).value;
  }

  private onSendError(exception: string):void {
    alert(exception);
  }

  private onSendSucess(valeur: string):void {
    alert(valeur);
  }

  public hide(){
    this.overlay.hide();
    this.launcher.show();
    this.node.remove();
  }

};
