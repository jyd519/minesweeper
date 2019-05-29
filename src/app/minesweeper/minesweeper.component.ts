import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import * as immutable from 'immutable';
import { partition } from 'src/util';
import { isGameOver, revealTile } from 'src/game';

@Component({
  selector: 'app-minesweeper',
  // <div class="board">
  //   <app-row *ngFor="let row of rows" [row]="row" (tileClick)="handleTileClick($event)"></app-row>
  // </div>
  template: `
  <div class="board">
    <app-tile *ngFor="let tile of getTiles()" [tile]="tile" (tileClick)="handleTileClick($event)"></app-tile>
  </div>
  `
}
)
export class MinesweeperComponent implements OnChanges {

  @Input() game: any;

  constructor() { }

  public rows;
  history = immutable.List();

  ngOnChanges(changes) {
    // Only update game when game has actually changed
    if (changes.hasOwnProperty('game')) {
      this.updateGame();
    }
  }
  getTiles() {
    return this.game ? this.game.get('tiles') : [];
  }
  updateGame(updateHistory = true) {
    // this.rows = partition(this.game.get('cols'), this.game.get('tiles'));
    // if (updateHistory) {
    //   this.history = this.history.push(this.game);
    // }
    this.history = this.history.push(this.game);
  }

  handleTileClick(tile) {
    if (!tile) {
      return;
    }
    if (isGameOver(this.game)) {
      return;
    }
    const newGame = revealTile(this.game, tile.get('id'));
    if (newGame !== this.game) {
      this.game = newGame;
      this.updateGame();
    }
    if (isGameOver(this.game)) {
      window.alert('GAME OVER!');
    }
  }

  undo() {
    if (this.canUndo()) {
      this.history = this.history.pop();
      this.game = this.history.last();

      // Don't update the history so we don't end up with
      // the same game twice in the end of the list
      // this.updateGame(false);
    }
  }

  canUndo() {
    return this.history.size > 1;
  }
}
