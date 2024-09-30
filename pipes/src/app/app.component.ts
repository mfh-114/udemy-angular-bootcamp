import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { ConvertMilesPipe } from "./convert-miles.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ConvertMilesPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name:string = '';

  miles:number = 0;

  onNameChange(event:any) {
    this.name = event.target.value;

  }

  onMilesChange(event:any) {
    this.miles = parseFloat(event.target.value);
  }

}
