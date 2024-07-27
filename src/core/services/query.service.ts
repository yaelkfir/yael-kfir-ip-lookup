import { Injectable } from '@angular/core';
import {
  Observable,
  ReplaySubject,
  Subject,
  catchError,
  finalize,
  of,
  takeUntil,
  tap,
} from 'rxjs';
import { RequestState } from '../models/request-state.model';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor() {}
  static requestState<R>(
    request: () => Observable<R>
  ): Observable<RequestState<R>> {
    const requestState$ = new ReplaySubject<RequestState<R>>();
    const takeUntil$ = new Subject();

    const error = null;
    const loading = true;
    const response = null;
    requestState$.next({ response, error, loading });

    request()
      .pipe(
        tap((res: R) => {
          const error = null;
          const loading = false;
          const response = res;
          requestState$.next({ response, error, loading });
        }),
        catchError((error: any) => {
          const loading = false;
          const response = null;
          requestState$.next({ response, error, loading });
          return of(null);
        }),
        takeUntil(takeUntil$)
      )
      .subscribe();

    return requestState$.pipe(
      finalize(() => {
        takeUntil$.next(true);
      })
    );
  }
}
