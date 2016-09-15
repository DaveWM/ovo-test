import {RockPaperScissors} from './rock-paper-scissors.enum';

export function doesBeat(x: RockPaperScissors, y: RockPaperScissors){
  if(x === y)
    return null;
  return x == (y + 1) % 3;
}
