import { Component, Input, OnInit } from '@angular/core';

import { IpData } from '../../models/ip-data.model';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControlsUtil } from '../../utils/form-controls.utill';
import { Observable, of } from 'rxjs';
import { RequestState } from '../../models/request-state.model';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IpLookupService } from '../../services/ip-lookup.service';
import { TimezoneClockPipe } from '../../pipes/timezone-clock.pipe';
import { FlagSrcPipe } from '../../pipes/flag-src.pipe';

@Component({
  selector: 'app-ip-lookup-item',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    TimezoneClockPipe,
    FlagSrcPipe,
  ],
  templateUrl: './ip-lookup-item.component.html',
  styleUrl: './ip-lookup-item.component.scss',
})
export class IpLookupItemComponent implements OnInit {
  @Input() ipFormControl = FormControlsUtil.ipControl('');
  @Input() number = 1;

  ipRequest$: Observable<RequestState<IpData> | null> = of(null);

  constructor(private ipLookupService: IpLookupService) {}

  get ipValue() {
    return this.ipFormControl.value?.trim() || '';
  }

  ngOnInit(): void {
    this.ipRequest$ = this.ipLookupService.onChangeIp(
      this.ipFormControl,
      this.ipValue
    );
  }
}
