import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McEditorComponent } from './mc-editor.component';

describe('McEditorComponent', () => {
  let component: McEditorComponent;
  let fixture: ComponentFixture<McEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
