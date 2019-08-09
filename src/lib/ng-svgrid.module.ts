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
    Components.SvgridComponent,
    Directives.DraggableDirective,
    Directives.GridItemDirective,
  ],
  exports: [
    Components.GridComponent,
    Components.SvgridComponent,
    Directives.DraggableDirective,
    Directives.GridItemDirective,
  ]
})
export class NgSvgridModule {
}
