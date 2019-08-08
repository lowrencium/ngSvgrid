import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import * as Components from './components';
import * as Directives from './directives';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Components.GridComponent,
    Components.GridItemComponent,
    Components.SvgridComponent,
    Directives.DraggableDirective
  ],
  exports: [
    Components.GridComponent,
    Components.GridItemComponent,
    Components.SvgridComponent,
    Directives.DraggableDirective
  ]
})
export class NgSvgridModule {
}
