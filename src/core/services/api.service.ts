import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  iif,
  map,
  merge,
  mergeMap,
  of,
  tap,
  throwError,
} from 'rxjs';
import { IpData } from '../models/ip-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseApi = 'http://ip-api.com/json';

  constructor(private api: HttpClient) {}

  getIpData(ip: string): Observable<IpData> {
    return this.api.get<IpData>(`${this.baseApi}/${ip}`).pipe(
      mergeMap((ipData: IpData) => {
        return iif(
          () => ipData.status !== 'success',
          throwError(() => ipData.message),
          of(ipData)
        );
      })
    );
  }
}
