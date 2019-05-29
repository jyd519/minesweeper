import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-row',
  template: `
  <div class="row">
      <app-tile *ngFor="let tile of row" [tile]="tile" (click)="handleTileClick(tile)"></app-tile>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
}
)
export class RowComponent implements OnInit {
  @Input() row: any;
  @Output() tileClick = new EventEmitter();

  ngOnInit() {
  }

  handleTileClick(tile) {
    this.tileClick.next(tile);
  }

}
