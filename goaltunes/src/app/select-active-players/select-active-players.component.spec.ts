import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectActivePlayersComponent } from './select-active-players.component';

describe('SelectActivePlayersComponent', () => {
  let component: SelectActivePlayersComponent;
  let fixture: ComponentFixture<SelectActivePlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectActivePlayersComponent]
    });
    fixture = TestBed.createComponent(SelectActivePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
