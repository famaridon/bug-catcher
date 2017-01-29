import { Dialog } from "./Dialog";

export class BugOverlay extends Dialog{
  
  private node: HTMLElement;

  constructor() {
    super();
  }

  public show(){
    html2canvas(document.body, {
      onrendered: function(canvas) {
        document.body.appendChild(canvas);
      }
    });
  }

  public hide(){
    this.node.classList.add("hidden");

  }

};
