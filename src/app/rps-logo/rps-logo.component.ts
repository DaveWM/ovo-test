import { Component, OnInit, Input } from '@angular/core';
import {RockPaperScissors} from '../rock-paper-scissors.enum';

@Component({
  selector: 'rps-logo',
  templateUrl: './rps-logo.component.html',
  styleUrls: ['./rps-logo.component.css']
})
export class RPSLogoComponent {
  @Input()
  option : RockPaperScissors;

  getImageUrl(){
    let root = '/assets/images/';
    if(this.option === null)
      return root + 'question.png';
    return `${root}${RockPaperScissors[this.option].toLowerCase()}.png`;
  }
}
