import { Subscription, interval } from 'rxjs';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit, AfterViewInit {
  constructor(private _du: DesignUtilityService) {}

  userList1 = ['Angular1', 'Angular2'];
  userList2: any = [];
  userList3: any = [];
  // subscribe Modes

  subscrieMode2 = false;
  subscrieMode3 = false;

  // subsCriptions
  subscription2!: Subscription;
  subscription3!: Subscription;

  // toggle properties

  methodInterval: boolean = false;
  intSubscription!: Subscription;
  ngOnInit(): void {
    this._du.videoEmit.subscribe((res) => this.userList1.push(res));
  }
  ngAfterViewInit(): void {}
  // Video add method
  onVideoAdd(video: any) {
    console.log(video);
    this._du.videoEmit.next(video);
  }

  // user2 btn
  user2subscribe() {
    if (this.subscrieMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._du.videoEmit.subscribe((res) =>
        this.userList2.push(res)
      );
    }
    this.subscrieMode2 = !this.subscrieMode2;
  }

  // user3 btn
  user3subscribe() {
    if (this.subscrieMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this._du.videoEmit.subscribe((res) =>
        this.userList3.push(res)
      );
    }
    this.subscrieMode3 = !this.subscrieMode3;
  }

  // toggle Method
  toggleMethod() {
    const broadCastVideo = interval(1000);
    if (!this.methodInterval) {
      this.intSubscription = broadCastVideo.subscribe((res) => {
        this._du.videoEmit.next('Video' + res);
      });
    } else {
      this.intSubscription.unsubscribe();
    }
    this.methodInterval = !this.methodInterval;
  }
}
