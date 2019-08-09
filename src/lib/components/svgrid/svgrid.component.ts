import {Component, Input, ViewChild} from '@angular/core';
import {GridComponent} from '..';

@Component({
  selector: 'ngs-svgrid',
  templateUrl: './svgrid.component.html',
  styleUrls: ['./svgrid.component.scss']
})
export class SvgridComponent {
  viewBoxPosX = 0;
  viewBoxPosY = 0;
  @ViewChild(GridComponent, {static: false})
  private grid: GridComponent;
  private actualScale = 100;

  get scale(): number {
    return this.actualScale;
  }

  @Input()
  set scale(value: number) {
    this.actualScale = Math.max(value, 1);
  }

  onGridDrag(event: MouseEvent | DragEvent) {
    this.viewBoxPosX += event.movementX;
    this.viewBoxPosY += event.movementY;

    this.grid.detectChanges();
  }
}
