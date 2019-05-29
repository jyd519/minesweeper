import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tile',
  template: `
  <div class="tile" [class.mine]="tile.get('isMine')">
    <div class="lid" *ngIf="!tile.get('isRevealed')"></div>
    <div *ngIf="tile.get('isRevealed') && !tile.get('isMine')">
      {{ tile.get('threatCount') > 0 ? tile.get('threatCount') : '' }}
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit, OnChanges {
  @Input() tile: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Tile', this.tile);
  }

}
