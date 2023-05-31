import { Component } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent {
  obsSubscription!: Subscription;
  obsSubscription1!: Subscription;
  constructor(private _dU: DesignUtilityService) {}
  arr = ['Anup', 'Shekhar', 'Sharma', 'User', 'Sender', 'Receiver'];
  colors = ['Red', 'Green', 'Yellow', 'Orange', 'Skyblue', 'Violet'];
  myColor = '';
  ngOnInit(): void {
    const source = interval(1000);
    // Ex - 01
    this.obsSubscription = source
      .pipe(
        tap((res) => {
          console.log('tap before map=>' + res); //// using tap to know the transformation of Data
          if (res >= 4) this.obsSubscription.unsubscribe();
        }),
        map((res) => this.arr[res]),
        tap((res) => console.log('Tap after Map =>' + res)) // using tap to know the transformation of Data
      )
      .subscribe((res) => {
        this._dU.print(res, 'elContainer13');
        console.log(res);
      });
    // Ex - 02

    this.obsSubscription1 = source
      .pipe(
        tap((res) => {
          if (res < this.colors.length) this.myColor = this.colors[res];
          console.log(this.myColor);

          if (res >= this.colors.length) {
            this.obsSubscription1.unsubscribe();
            console.log(res);
          }
        }),
        map((res) => this.colors[res])
      )
      .subscribe((res) => {
        this._dU.print(res, 'elContainer14');
      });
  }
}
