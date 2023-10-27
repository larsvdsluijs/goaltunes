import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OponentSongDialogComponent } from './oponent-song-dialog.component';

describe('OponentSongDialogComponent', () => {
  let component: OponentSongDialogComponent;
  let fixture: ComponentFixture<OponentSongDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OponentSongDialogComponent]
    });
    fixture = TestBed.createComponent(OponentSongDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
