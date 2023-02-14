import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkaeegListComponent } from './ikaeeg-list.component';

describe('IkaeegListComponent', () => {
  let component: IkaeegListComponent;
  let fixture: ComponentFixture<IkaeegListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkaeegListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IkaeegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
