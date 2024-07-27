import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpLookupItemComponent } from './ip-lookup-item.component';

describe('IpLookupItemComponent', () => {
  let component: IpLookupItemComponent;
  let fixture: ComponentFixture<IpLookupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpLookupItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpLookupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
