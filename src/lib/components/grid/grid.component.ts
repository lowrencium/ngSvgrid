import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ngs-grid',
  templateUrl: './grid.component.svg',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() viewPosX = 0;
  @Input() viewPosY = 0;
  @Input() viewboxWidth = 100;
  @Input() viewboxHeight = 100;
  @Input() scale = 100;

  @Output() drag = new EventEmitter();

  constructor(private changeDetectorRef: ChangeDetectorRef) {

  }

  get viewbox(): string {
    return `0 0 ${this.viewboxWidth} ${this.viewboxHeight}`;
  }

  get viewBoxTranslate(): string {
    return `translate(${this.viewPosX}px,${this.viewPosY}px)`;
  }

  get viewBoxScale(): string {
    return `scale(${this.scale / 100},${this.scale / 100})`;
  }

  get viewBoxTransform(): string {
    return `${this.viewBoxTranslate} ${this.viewBoxScale}`;
  }

  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}
