/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RpsService } from './rps.service';
import {RockPaperScissors} from './rock-paper-scissors.enum';

describe('RpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpsService]
    });
  })

  it('should be injectable', inject([RpsService], (service: RpsService) => {
    expect(service).toBeTruthy();
  }));

  describe('doesBeat', () => {
    let sut : RpsService;
    beforeEach(() => sut = new RpsService())
    it('should return true that rock beats scissors', () => {
      let result = sut.doesBeat(RockPaperScissors.Rock, RockPaperScissors.Scissors);
      expect(result).toEqual(true);
    })

    it('should return true that scissors beat paper', () => {
      let result = sut.doesBeat(RockPaperScissors.Scissors, RockPaperScissors.Paper);
      expect(result).toEqual(true);
    })

    it('should return null when given 2 identical options', () => {
      let result = sut.doesBeat(RockPaperScissors.Paper, RockPaperScissors.Paper);
      expect(result).toEqual(null);
    })
  })
});
