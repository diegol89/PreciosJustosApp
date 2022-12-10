import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciasSelectComponent } from './provincias-select.component';

describe('ProvinciasSelectComponent', () => {
  let component: ProvinciasSelectComponent;
  let fixture: ComponentFixture<ProvinciasSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciasSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinciasSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
