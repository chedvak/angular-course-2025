import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFetch } from './users-fetch';

describe('UsersFetch', () => {
  let component: UsersFetch;
  let fixture: ComponentFixture<UsersFetch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersFetch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersFetch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
