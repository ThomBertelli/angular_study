import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicloDeVidaPaiComponent } from './cliclo-de-vida-pai.component';

describe('ClicloDeVidaPaiComponent', () => {
  let component: ClicloDeVidaPaiComponent;
  let fixture: ComponentFixture<ClicloDeVidaPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClicloDeVidaPaiComponent]
    });
    fixture = TestBed.createComponent(ClicloDeVidaPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
