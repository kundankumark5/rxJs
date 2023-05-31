import { Component } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  // subscriptions
  sub1!: Subscription;
  sub2!: Subscription;
  sub3!: Subscription;
  // msgs
  msg1 = '';
  msg2: any;
  msg3 = '';
  constructor(private _designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {
    const broadCastVideo = interval(1000);

    // Ex-01

    // this.sub1 = broadCastVideo.subscribe((res) => {
    //
    //   console.log('Video' + res);
    // });
    this.sub1 = broadCastVideo
      .pipe(map((data) => 'Video' + data)) // we can use pipe before subscribe to transform our data
      .subscribe((res) => {
        // console.log( res);
        this.msg1 = res;
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    // Ex-02

    this.sub2 = broadCastVideo
      .pipe(
        map(
          (data) => data + 10 // we can do any operation with our data here
        )
      )
      .subscribe((res) => {
        this.msg2 = res;
      });
    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    // Ex-03

    const members = [
      { id: 1, name: 'Anup' },
      { id: 2, name: 'Pankaj' },
      { id: 3, name: 'Tanmay' },
      { id: 4, name: 'Ashish' },
      { id: 5, name: 'Rajesh' },
      { id: 6, name: 'Vivek' },
      { id: 7, name: 'Rajiv' },
      { id: 8, name: 'Raman' },
    ];
    let memObs = from(members); // using from to convert our array into observable

    memObs.pipe(map((data) => data.name)).subscribe((res) => {
      console.log(res);
      this._designUtilityService.print(res, 'elContainer12');
    });
  }
}
