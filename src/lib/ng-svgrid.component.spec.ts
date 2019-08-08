import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgSvgridComponent} from './ng-svgrid.component';

describe('NgSvgridComponent', () => {
    let component: NgSvgridComponent;
    let fixture: ComponentFixture<NgSvgridComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgSvgridComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgSvgridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
