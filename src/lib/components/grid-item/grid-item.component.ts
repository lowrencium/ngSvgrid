import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: '[ngs-grid-item]',
  templateUrl: './grid-item.component.svg',
  styleUrls: ['./grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridItemComponent {
  @Input() x = 0;
  @Input() y = 0;

  get translate(): string {
    return `translate(${this.x}px,${this.y}px)`;
  }

  get transform(): string {
    return this.translate;
  }
}
