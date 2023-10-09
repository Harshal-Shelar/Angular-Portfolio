import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSkillsComponent } from './other-skills.component';

describe('OtherSkillsComponent', () => {
  let component: OtherSkillsComponent;
  let fixture: ComponentFixture<OtherSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
