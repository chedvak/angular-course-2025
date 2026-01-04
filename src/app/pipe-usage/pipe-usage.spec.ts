import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeUsage } from './pipe-usage';

describe('PipeUsage', () => {
  let component: PipeUsage;
  let fixture: ComponentFixture<PipeUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeUsage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeUsage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
