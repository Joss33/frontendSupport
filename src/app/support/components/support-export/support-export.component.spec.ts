import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportExportComponent } from './support-export.component';

describe('SupportExportComponent', () => {
  let component: SupportExportComponent;
  let fixture: ComponentFixture<SupportExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
