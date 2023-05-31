import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapexpComponent } from './switch-mapexp.component';

describe('SwitchMapexpComponent', () => {
  let component: SwitchMapexpComponent;
  let fixture: ComponentFixture<SwitchMapexpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchMapexpComponent]
    });
    fixture = TestBed.createComponent(SwitchMapexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
