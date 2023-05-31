import { Subscription, interval } from 'rxjs';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent implements OnInit, AfterViewInit {
  constructor(private _du: DesignUtilityService) {}
  asyncVideoEmitted: any;
  ngOnInit(): void {
    this._du.asyncVideoEmit.subscribe((res) => {
      this.asyncVideoEmitted = res;
    });
  }
  ngAfterViewInit(): void {}
  // Video add method
  onVideoAdd(video: any) {
    console.log(video);
    this._du.asyncVideoEmit.next(video);
  }
  subscriptionComplete() {
    this._du.asyncVideoEmit.complete();
  }
}
