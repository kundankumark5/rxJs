import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncAwaitComponent } from './async-await.component';

describe('AsyncAwaitComponent', () => {
  let component: AsyncAwaitComponent;
  let fixture: ComponentFixture<AsyncAwaitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncAwaitComponent]
    });
    fixture = TestBed.createComponent(AsyncAwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
