import {Directive, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[ngsGridItem]'
})
export class GridItemDirective implements OnChanges {
  @Input() x = 0;
  @Input() y = 0;

  @HostBinding('style.transform')
  hostTransform: string;

  get translate(): string {
    return `translate(${this.x}px,${this.y}px)`;
  }

  get transform(): string {
    return this.translate;
  }

  ngOnChanges() {
    this.hostTransform = this.transform;
  }
}
