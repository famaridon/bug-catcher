export abstract class Dialog {
  abstract show():void;
  abstract hide():void;

  protected buildTemplate(template:string): HTMLElement {
    let temp = document.createElement('div');
    temp.innerHTML = template;
    return <HTMLElement> temp.firstElementChild;
  }
};
