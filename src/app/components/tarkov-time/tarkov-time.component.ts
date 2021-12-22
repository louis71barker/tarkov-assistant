import { Component, OnDestroy, OnInit } from '@angular/core';
import { mergeMap, Observable, timer, interval, Subscriber, Subscription, Subject, takeUntil } from 'rxjs';
import { TarkovTimeService } from 'src/app/_services/tarkov-time/tarkov-time.service';

@Component({
  selector: 'app-tarkov-time',
  templateUrl: './tarkov-time.component.html',
  styleUrls: ['./tarkov-time.component.scss']
})
export class TarkovTimeComponent implements OnInit, OnDestroy {

  timer: any;

  private unsubscribe$ = new Subject();

  rightTime: Date = new Date();
  leftTime: Date = new Date();

  constructor(private tarkovTimeService: TarkovTimeService) { }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.timer = interval((1000 / 7)).pipe(takeUntil(this.unsubscribe$)).subscribe((val) => {
      this.rightTime = this.tarkovTimeService.realTimeToTarkovTime(new Date(),false);
      this.leftTime = this.tarkovTimeService.realTimeToTarkovTime(new Date(),true);
    });
  }



}
