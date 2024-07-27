import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpLookupRouteComponent } from './ip-lookup-route.component';

describe('IpLookupRouteComponent', () => {
  let component: IpLookupRouteComponent;
  let fixture: ComponentFixture<IpLookupRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpLookupRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpLookupRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
