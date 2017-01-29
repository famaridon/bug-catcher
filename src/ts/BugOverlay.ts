import { Dialog } from "./Dialog";
import { Launcher } from "./Launcher";

export class BugOverlay extends Dialog{

  private overlay: HTMLElement;
  private launcher: Launcher;

  constructor(launcher: Launcher) {
    super();
    this.launcher = launcher;
  }

  public show(){
    this.launcher.hide();
    this.overlay = document.createElement("div");
    this.overlay.id = "bug-catcher-overlay";
    this.overlay.classList.add("overlay");
    this.overlay.classList.add("bug-catcher");
    document.body.appendChild(this.overlay);

    html2canvas(document.body, {
      onrendered: function(canvas) {
        document.getElementById("bug-catcher-overlay").appendChild(canvas);
      }
    });
  }

  public hide(){
    this.overlay.remove();

  }

};
