import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tile',
  template: `
  <div class="tile" [class.mine]="tile.get('isMine')"  (click)="handleTileClick(tile)">
    <div class="lid" *ngIf="!tile.get('isRevealed')"></div>
    <div *ngIf="tile.get('isRevealed') && !tile.get('isMine')">
      {{ tile.get('threatCount') > 0 ? tile.get('threatCount') : '' }}
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit, OnChanges {
  @Input() tile: any;
  @Output() tileClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Tile', this.tile);
  }

  handleTileClick(tile) {
    this.tileClick.next(tile);
  }
}
