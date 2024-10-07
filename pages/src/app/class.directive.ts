import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {
  
  constructor(private element: ElementRef) { 
    console.log("It is Class Directive. " + element.nativeElement);
    //element.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  @Input() set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
