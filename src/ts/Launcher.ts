import { Dialog } from "./Dialog";
import { BugOverlay } from "./BugOverlay";

export class Launcher extends Dialog{

  /**
  * the html to display
  **/
  public template = `<button>Find a bug ?</button>`;
  /**
  * Wh
  **/
  public position = "bottom-right";
  private node: HTMLElement;
  private overlay: BugOverlay;

  constructor() {
    super();
    this.overlay = new BugOverlay();
  }

  private init() {
    this.node = document.createElement("div");
    this.node.innerHTML = this.template;
    this.node.classList.add("bug-catcher");
    this.node.classList.add("launcher");
    this.node.classList.add("hidden");
    document.body.appendChild(this.node);
    this.node.onclick = () => this.openBugWritter();
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
    this.overlay.show();
  }

};