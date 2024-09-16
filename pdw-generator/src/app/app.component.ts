import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private length = 0;
  private password:string = '';
  private includeLetters:boolean = false;
  private includeNumbers:boolean = false;
  private includeSymbols:boolean = false;

  onButtonClick() {
    console.log('Button was clicked');
    this.password = 'jaskkjask192913';

    console.log(`
      Include length: ${this.length}
      Include letter checked: ${this.includeLetters} 
      Include number checked: ${this.includeNumbers}
      Include symbol checked: ${this.includeSymbols} 
    `);
  }

  getPassword() {
    return this.password;
  }

  getLength(){
    return this.length;
  }

  getIncludeLetters() {
    return this.includeLetters;
  }

  getIncludeNumbers() {
    return this.includeNumbers;
  }

  getIncludeSymbols() {
    return this.includeSymbols;
  }

  displayPasswordToggle(){
    return this.password == null;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log("Include letter checked: " + this.includeLetters);
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log("Include number checked: " + this.includeNumbers);
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log("Include symbol checked: " + this.includeSymbols);
  }

  onChangeLength(event: any) {

    const parsedValue =  parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      this.length= parsedValue;
    }
  }
}
