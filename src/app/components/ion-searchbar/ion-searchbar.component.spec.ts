import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSearchBarComponent } from './ion-searchbar.component';

describe('SearchComponent', () => {
  let component: IonSearchBarComponent;
  let fixture: ComponentFixture<IonSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
