import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStateComponent } from './single-state.component';

describe('SingleStateComponent', () => {
  let component: SingleStateComponent;
  let fixture: ComponentFixture<SingleStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
