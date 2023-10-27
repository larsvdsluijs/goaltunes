import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OponentSongsComponent } from './oponent-songs.component';

describe('OponentSongsComponent', () => {
  let component: OponentSongsComponent;
  let fixture: ComponentFixture<OponentSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OponentSongsComponent]
    });
    fixture = TestBed.createComponent(OponentSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
