import { Component } from '@angular/core';
import {GameState} from './game-state.enum'
import {RockPaperScissors} from './rock-paper-scissors.enum'
import * as Rx from 'rxjs';
import {doesBeat} from './helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  GameState = GameState;
  RockPaperScissors = RockPaperScissors;
  playerOptions = Object.keys(RockPaperScissors).map(x => parseInt(x)).filter(x => x >= 0);
  // would be nice to use immutablejs for global state, but I don't have time
  state = {
    gameState: GameState.Waiting,
    countdownTimer: 0,
    opponentItem: <RockPaperScissors> null,
    playerItem: <RockPaperScissors> null,
    score: {
      player: 0,
      opponent: 0
    }
  };

  start() {
    Object.assign(this.state, {
      gameState: GameState.Countdown,
      opponentItem: null,
      playerItem: null,
      countdownTimer: 0
    });

    Rx.Observable
      .interval(1000)
      .map(i => 2 - i)
      .startWith(3)
      .take(4)
      .subscribe(
        i => this.state.countdownTimer = i,
        err => console.log(err),
        () => {
          this.state.gameState = GameState.Playing;
        }
      );
  }

  selectPlayerItem(selected : RockPaperScissors) {
    let opponentItem = <RockPaperScissors>Math.floor(Math.random() * 3);
    this.state.opponentItem = opponentItem;
    this.state.playerItem = selected;
    let playerWins = doesBeat(selected, opponentItem);
    if(playerWins) {
      this.state.score.player++;
    } else if(playerWins === false) {
      this.state.score.opponent++;
    }
  }
}
