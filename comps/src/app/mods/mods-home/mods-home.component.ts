import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  
  toggleModal:boolean = false;

  items = [
    { title: "What is your name?", content: "I do not know my name."},
    { title: "Why is sky is blue?", content:"Sky is not blue it black." },
    { title: "Who are you?", content:"I am a monster." },
  ];
  
  onClick() {
    
    this.toggleModal = !this.toggleModal;

    console.log("Toggle modal: " + this.toggleModal)
  }

}
