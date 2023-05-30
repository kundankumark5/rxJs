import { Component } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent {
  obsMsg!: any;
  videoSubscription!: Subscription;
  constructor(private _designUtilityService: DesignUtilityService) {}
  ngOnInit(): void {
    // const broadcastVideo = interval(2000);
    const broadcastVideo = timer(3000,1000);
    this.videoSubscription = broadcastVideo.subscribe((res) => {
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this._designUtilityService.print(this.obsMsg, 'elContainer3');
      this._designUtilityService.print(this.obsMsg, 'elContainer4');
      this._designUtilityService.print(this.obsMsg, 'elContainer5');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
