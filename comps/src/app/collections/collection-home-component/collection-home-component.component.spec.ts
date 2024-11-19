import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionHomeComponentComponent } from './collection-home-component.component';

describe('CollectionHomeComponentComponent', () => {
  let component: CollectionHomeComponentComponent;
  let fixture: ComponentFixture<CollectionHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionHomeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
