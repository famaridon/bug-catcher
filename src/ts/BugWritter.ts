import { Dialog } from "./Dialog";
import { Launcher } from "./Launcher";
import { BugOverlay } from "./BugOverlay";

export class BugWritter extends Dialog{

  private overlay: BugOverlay;
  private launcher: Launcher;

  constructor(launcher: Launcher) {
    super();
    this.launcher = launcher;
    this.overlay = new BugOverlay();
  }

  public show(){
    /* first hide the launcher else we have it on screen shot*/
    this.launcher.hide();
    this.overlay.show();
  }

  public hide(){
    this.overlay.hide();
    this.launcher.show();
  }

};
