import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetail } from './recipes-detail';

describe('RecipesDetail', () => {
  let component: RecipesDetail;
  let fixture: ComponentFixture<RecipesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
