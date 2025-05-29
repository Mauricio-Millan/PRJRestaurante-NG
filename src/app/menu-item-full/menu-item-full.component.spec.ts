import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemFullComponent } from './menu-item-full.component';

describe('MenuItemFullComponent', () => {
  let component: MenuItemFullComponent;
  let fixture: ComponentFixture<MenuItemFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
