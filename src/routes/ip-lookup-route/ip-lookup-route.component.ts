import { Component } from '@angular/core';
import { IpLookupComponent } from '../../core/components/ip-lookup/ip-lookup.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ip-lookup-route',
  standalone: true,
  templateUrl: './ip-lookup-route.component.html',
  styleUrl: './ip-lookup-route.component.scss',
  imports: [IpLookupComponent, MatCardModule],
})
export class IpLookupRouteComponent {}
