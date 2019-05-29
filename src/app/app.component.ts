import { Component, OnInit } from '@angular/core';
import { createGame } from 'src/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'minesweeper';
  public game;

  constructor() {
  }

  ngOnInit() {
    this.startNewGame();
  }

  startNewGame() {
    this.game = createGame({cols: 16, rows: 16, mines: 48});
  }
}
