import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDiscriptionComponent } from './state-discription.component';

describe('StateDiscriptionComponent', () => {
  let component: StateDiscriptionComponent;
  let fixture: ComponentFixture<StateDiscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateDiscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
