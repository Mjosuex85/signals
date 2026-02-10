import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './my-characters.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
