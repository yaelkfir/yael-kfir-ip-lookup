import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'flagSrc',
  standalone: true,
})
export class FlagSrcPipe implements PipeTransform {
  baseFlag = 'https://flagcdn.com';
  constructor(private domSanitizer: DomSanitizer) {}

  transform(counteryCode: string, size = '16x12', imgType = 'png'): SafeUrl {
    const url = `${
      this.baseFlag
    }/${size}/${counteryCode.toLowerCase()}.${imgType}`;
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
}
