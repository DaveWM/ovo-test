/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GameState } from './game-state.enum';

describe('App: OvoTest', () => {
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a global state object', async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app.state).toBeTruthy();
  }));

  it(`should initially be in the 'Waiting' state`, async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app.state.gameState).toEqual(GameState.Waiting);
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Rock, Paper, Scissors');
  }));
});
