import {TestBed} from '@angular/core/testing';

import {NgSvgridService} from './ng-svgrid.service';

describe('NgSvgridService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: NgSvgridService = TestBed.get(NgSvgridService);
        expect(service).toBeTruthy();
    });
});
