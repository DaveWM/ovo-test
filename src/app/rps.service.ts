import { Injectable } from '@angular/core';
import {RockPaperScissors} from './rock-paper-scissors.enum';

@Injectable()
export class RpsService {

  doesBeat(x: RockPaperScissors, y: RockPaperScissors){
    if(x === y)
      return null;
    return x == (((y + 1) % 3) || 3);
  }

}
