import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyRadarComponent } from './technology-radar.component';

describe('TechnologyRadarComponent', () => {
  let component: TechnologyRadarComponent;
  let fixture: ComponentFixture<TechnologyRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyRadarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
