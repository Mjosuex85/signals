import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharachtersComponent } from './charachters.component';

describe('CharachtersComponent', () => {
  let component: CharachtersComponent;
  let fixture: ComponentFixture<CharachtersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharachtersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharachtersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
