import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicloDeVidaComponent } from './cliclo-de-vida.component';

describe('ClicloDeVidaComponent', () => {
  let component: ClicloDeVidaComponent;
  let fixture: ComponentFixture<ClicloDeVidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClicloDeVidaComponent]
    });
    fixture = TestBed.createComponent(ClicloDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
