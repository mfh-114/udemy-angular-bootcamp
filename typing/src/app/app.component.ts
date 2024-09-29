import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoremIpsum } from 'lorem-ipsum';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title:string = 'typing';
  randomText:string = '';
  randomTextArr = new Array();
  typedText:string = ''; 
  typeText:string = '';
  currentPos = 0;
  isMarkGreen = false;
  isMarkRed = false;
  markedColorArr = new Array;
  markedColorClassArr = new Array;
  isWin = false;
  timer:number = 0;

  controlKeys = ['Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'Enter', 'Escape', 'Backspace', 'Delete', 'Insert', ''];

  ngOnInit(): void {
    let loremIpsum = new LoremIpsum({
      
      wordsPerSentence: {
        max: 5,
        min: 3
      }
    });
    this.randomText = loremIpsum.generateSentences(1);
    this.randomTextArr = this.randomText.split('');
    this.currentPos = 0;
     
  }

  public generateRandomTextArr() {
    
    return this.randomTextArr;
  }


  public onChangeMatch(event:any){
    
    this.typeText = event.target.value;
  
     console.log(this.typeText);
  }

  public onKeyDown(event:any) {
    
    let isControlKey:boolean = false;
    let keyValue = event.key;

    this.controlKeys.forEach((item)=>{
      if (item == keyValue) {
        isControlKey = true;
        if (keyValue == "Backspace" || keyValue == "Delete") {
          this.currentPos--;
          this.markedColorClassArr[this.currentPos] = '';
          
              // do not go back to negative.
          if (this.currentPos < 0) {
            this.currentPos = 0;
           }
        }
      }
    });

    if (!isControlKey) {
      isControlKey = false;

      console.log("Type text: " + this.typeText);
      
      let currentRandomChar = this.randomTextArr[this.currentPos];
      console.log("type char: " + keyValue + ", randome char: " + currentRandomChar);

      if (keyValue == currentRandomChar) {
        this.markedColorArr[this.currentPos] = true;
        this.markedColorClassArr[this.currentPos] = 'random-text-green-color';
      } else {
        this.markedColorArr[this.currentPos] = false;
        this.markedColorClassArr[this.currentPos] = 'random-text-red-color';
      }

      if (this.currentPos == this.randomTextArr.length-1) {
        let found = this.markedColorArr.indexOf(false);
        if (found == -1) {
          this.isWin = true;
        }
      }

      this.currentPos++;
    }


    console.log("key: " + event.key + ", current position: " + this.currentPos);
  }


}
