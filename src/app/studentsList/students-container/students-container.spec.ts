import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsContainer } from './students-container';

describe('StudentsContainer', () => {
  let component: StudentsContainer;
  let fixture: ComponentFixture<StudentsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
