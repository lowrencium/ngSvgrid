import {Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[ngsDraggable]'
})
export class DraggableDirective {
  @Output() dragged = new EventEmitter<DragEvent | MouseEvent>();

  private dragging: boolean;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    renderer.setAttribute(elementRef.nativeElement, 'draggable', 'true');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.dragStart(event);
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent) {
    this.dragStart(event);
  }

  private dragStart(event: MouseEvent | DragEvent) {
    this.dragging = true;
    this.onDrag(event);

    const listeners: (() => void)[] = [
      this.renderer.listen('document', 'mousemove', e => this.onDrag(e)),
      this.renderer.listen('document', 'mouseup', e => this.onDragEnd(e, listeners)),
      this.renderer.listen('document', 'mouseleave', e => this.onDragEnd(e, listeners)),
    ];
  }

  private onDrag(event: DragEvent | MouseEvent) {
    if (this.dragging) {
      this.dragged.emit(event);

      event.stopPropagation();
      event.preventDefault();
    }
  }

  private onDragEnd(event: DragEvent, listeners: (() => void)[]) {
    if (this.dragging) {
      this.onDrag(event);
      this.dragging = false;

      listeners.forEach(listener => listener());
    }
  }
}
