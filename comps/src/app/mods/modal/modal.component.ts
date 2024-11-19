import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy{

  @Output() close = new EventEmitter();

  constructor(private el: ElementRef){
    console.log(this.el.nativeElement)
  }

  ngOnInit() {
    console.log("I am init,");
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    console.log("Leaving Modal");
    //document.body.removeChild(this.el.nativeElement);
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
