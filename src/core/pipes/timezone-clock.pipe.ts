import { Pipe, PipeTransform } from '@angular/core';
import { RealtimeService } from '../services/realtime.service';
import { format, toZonedTime } from 'date-fns-tz';
import { Observable, map, of } from 'rxjs';

@Pipe({
  name: 'timezoneClock',
  standalone: true,
})
export class TimezoneClockPipe implements PipeTransform {
  constructor(private realtimeService: RealtimeService) {}
  transform(timezone: string): Observable<string> {
    return !timezone
      ? of('')
      : this.realtimeService
          .getRealTimeClock()
          .pipe(
            map((time: string) =>
              format(toZonedTime(time, timezone), 'HH:mm:ss')
            )
          );
  }
}
