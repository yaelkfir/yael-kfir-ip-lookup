import { Routes } from '@angular/router';
import { IpLookupRouteComponent } from '../routes/ip-lookup-route/ip-lookup-route.component';

export const routes: Routes = [
    { path: '', redirectTo: 'ip-lookup', pathMatch: 'full' },
    { path: 'ip-lookup', component: IpLookupRouteComponent },
    { path: '**', redirectTo: 'ip-lookup' }
];