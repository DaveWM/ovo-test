import { Component, OnInit, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
  animations: [
    trigger('scoreChange', [
      transition('* => *', [
        animate(800, keyframes([
          style({'background-color': 'black', offset: 0}),
          style({'background-color': '#26a69a', offset: 0.2}),
          style({'background-color': 'black', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class ScoreboardComponent {
  @Input()
  score;
}
