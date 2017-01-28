export class Launcher {

  /**
  * the html to display
  **/
  public template: string;
  /**
  * Wh
  **/
  public position: string;
  private node: Element;

  constructor() {
    this.template = `<button>Find a bug ?</button>`;
    this.position = "bottom-right";
  }

  show() {
    this.node = document.createElement("div");
    this.node.innerHTML = this.template;
    this.node.classList.add("launcher");
    document.body.appendChild(this.node);
  }
};
