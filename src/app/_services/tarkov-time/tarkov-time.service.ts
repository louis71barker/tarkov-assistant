import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarkovTimeService {

  // 1 second real time = 7 seconds tarkov time
  private tarkovRatio = 7;

  constructor() {

  }

  realTimeToTarkovTime(time: Date, left: boolean) {
    // tarkov time moves at 7 seconds per second.
    // surprisingly, 00:00:00 does not equal unix 0... but it equals unix 10,800,000.
    // Which is 3 hours. What's also +3? Yep, Russia. UTC+3.
    // therefore, to convert real time to tarkov time,
    // tarkov time = (real time * 7 % 24 hr) + 3 hour


    const oneDay = this.hrs(24);
    const russia = this.hrs(3);

    const offset = russia + (left ? 0 : this.hrs(12));
    const tarkovTime = new Date((offset + (time.getTime() * this.tarkovRatio)) % oneDay);
    return tarkovTime;
  }

  timeUntilRelative(until: number, left: boolean, date: Date) {
    const tarkovTime = this.realTimeToTarkovTime(date, left);
    if (until < tarkovTime.getTime()) until += this.hrs(24);

    const diffTarkov = until - tarkovTime.getTime();
    const diffRT = diffTarkov / this.tarkovRatio;

    return diffRT;
  }

  private hrs(num: number) {
    return 1000 * 60 * 60 * num;
  }
}
