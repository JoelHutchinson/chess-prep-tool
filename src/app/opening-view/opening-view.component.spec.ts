import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningViewComponent } from './opening-view.component';

describe('OpeningViewComponent', () => {
  let component: OpeningViewComponent;
  let fixture: ComponentFixture<OpeningViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpeningViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
