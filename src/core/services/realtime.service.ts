import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { toZonedTime } from 'date-fns-tz';
import {
  BehaviorSubject,
  Observable,
  Subject,
  finalize,
  interval,
  map,
  of,
  share,
  shareReplay,
  takeUntil,
  tap,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RealtimeService {
  currentTime$: Observable<string> = of(new Date().toISOString());

  constructor(@Inject(PLATFORM_ID) private platform: Object) {
    if (!isPlatformServer(this.platform)) {
      this.currentTime$ = this.countTime();
    }
  }

  countTime(): Observable<string> {
    return timer(0, 1000).pipe(
      map(() => new Date().toISOString()),
      shareReplay(1)
    );
  }

  getRealTimeClock(): Observable<string> {
    return this.currentTime$;
  }
}
