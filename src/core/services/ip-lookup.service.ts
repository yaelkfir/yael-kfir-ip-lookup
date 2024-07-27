import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {
  Observable,
  distinctUntilChanged,
  filter,
  iif,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { IpData } from '../models/ip-data.model';
import { QueryService } from './query.service';
import { RequestState } from '../models/request-state.model';
import { FormControl } from '@angular/forms';
import { RealtimeService } from './realtime.service';

@Injectable({
  providedIn: 'root',
})
export class IpLookupService {
  constructor(
    private apiService: ApiService,
    private realTimeService: RealtimeService
  ) {}

  getRealTimeClock = (): Observable<string> => {
    return this.realTimeService.getRealTimeClock();
  };

  getIpData = (ip: string): Observable<IpData> => {
    return this.apiService.getIpData(ip);
  };

  getIpDataState = (ip: string): Observable<RequestState<IpData>> => {
    return QueryService.requestState(() => this.getIpData(ip));
  };

  ipFormControlUpdate(
    ipDataState: RequestState<IpData>,
    ipFormControl: FormControl
  ): void {
    ipDataState.loading
      ? ipFormControl.disable({ emitEvent: false })
      : ipFormControl.enable({ emitEvent: false });

    !ipDataState.error
      ? ipFormControl.setErrors(null)
      : ipFormControl.setErrors({ message: ipDataState.error });
  }

  onChangeIp(
    ipFormControl: FormControl,
    startValue: string
  ): Observable<RequestState<IpData> | null> {
    return ipFormControl.valueChanges.pipe(
      startWith(startValue),
      distinctUntilChanged(),
      switchMap((ip) => {
        return iif(
          () => ipFormControl.valid,
          this.getIpDataState(ip).pipe(
            tap((ipData) => this.ipFormControlUpdate(ipData, ipFormControl))
          ),
          of(null)
        );
      })
    );
  }
}
