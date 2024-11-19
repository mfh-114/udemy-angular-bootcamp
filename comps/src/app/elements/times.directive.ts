import { Directive, Input } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private template:TemplateRef<any>, 
              private viewContainer:ViewContainerRef
  ) { }

  
  @Input('appTimes') set render(times:number) {
    for (let i = 0; i<times; i++) {
      this.viewContainer.clear;

      this.viewContainer.createEmbeddedView(this.template, {});
    }
  } 

}
