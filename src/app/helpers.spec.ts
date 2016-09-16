import {doesBeat} from './helpers';
import {RockPaperScissors} from './rock-paper-scissors.enum';

describe('doesBeat', () => {
  it('should return true that rock beats scissors', () => {
    let result = doesBeat(RockPaperScissors.Rock, RockPaperScissors.Scissors);
    expect(result).toEqual(true);
  })

  it('should return true that scissors beat paper', () => {
    let result = doesBeat(RockPaperScissors.Scissors, RockPaperScissors.Paper);
    expect(result).toEqual(true);
  })

  it('should return null when given 2 identical options', () => {
    let result = doesBeat(RockPaperScissors.Paper, RockPaperScissors.Paper);
    expect(result).toEqual(null);
  })
})
