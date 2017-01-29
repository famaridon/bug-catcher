import { Dialog } from "./Dialog";
import { Launcher } from "./Launcher";

/**
* replace visible dom by an image
**/
export class BugOverlay extends Dialog{

  private overlay: HTMLElement;
  private canvas: HTMLCanvasElement;

  constructor() {
    super();
  }

  public show(){
    /*stop scrolling*/
    document.body.classList.add("stop-scrolling");

    /* append the overlay */
    this.overlay = document.createElement("div");
    this.overlay.id = "bug-catcher-overlay";
    this.overlay.classList.add("overlay");
    this.overlay.classList.add("bug-catcher");
    document.body.appendChild(this.overlay);

    html2canvas(document.body, {
      onrendered: (canvas) => this.setCanvas(canvas)
    });
  }

  private setCanvas(canvas: HTMLCanvasElement){
    this.canvas = canvas;
    document.getElementById("bug-catcher-overlay").appendChild(canvas);
  }

  public hide(){
    this.overlay.remove();
    document.body.classList.remove("stop-scrolling");
  }

};
