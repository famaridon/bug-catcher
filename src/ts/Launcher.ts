import { Dialog } from "./Dialog";
import { BugWritter } from "./BugWritter";

export class Launcher extends Dialog{

  /**
  * the html to display
  **/
  public template = `<button class="btn btn-primary">Find a bug <span class="glyphicon glyphicon-info-sign"></span></button>`;
  /**
  * Wh
  **/
  public position = "bottom-right";
  private node: HTMLElement;
  private writter: BugWritter;

  constructor() {
    super();
    this.writter = new BugWritter(this);
  }

  private init() {
    this.node = document.createElement("div");
    this.node.id = "bug-catcher-launcher";
    this.node.classList.add("bug-catcher");
    this.node.classList.add("launcher");
    this.node.classList.add("hidden");

    this.node.appendChild(this.buildTemplate(this.template));

    document.body.appendChild(this.node);
    this.node.addEventListener("click", () => this.openBugWritter());
  }

  public show(){
    if(this.node == null){
      this.init();
    }
    this.node.classList.remove("hidden");
  }

  public hide(){
    this.node.classList.add("hidden");

  }

  public openBugWritter() {
    this.writter.show();
  }

};
