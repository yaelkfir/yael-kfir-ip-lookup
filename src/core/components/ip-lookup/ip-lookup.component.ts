import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { IpLookupItemComponent } from '../ip-lookup-item/ip-lookup-item.component';
import { MatListModule } from '@angular/material/list';
import { FormArray, FormControl } from '@angular/forms';
import { FormControlsUtil } from '../../utils/form-controls.utill';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ip-lookup',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    IpLookupItemComponent,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './ip-lookup.component.html',
  styleUrl: './ip-lookup.component.scss',
})
export class IpLookupComponent {
  ips = new FormArray<FormControl<string>>([]);

  constructor() {
    this.addIp('');
  }

  getIpControl(ip: string) {
    return FormControlsUtil.ipControl(ip, { updateOn: 'blur' });
  }

  addIp(ip?: string) {
    const ipCtrl = this.getIpControl(ip || '');
    this.ips.push(ipCtrl);
  }
}
