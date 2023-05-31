import { Component } from '@angular/core';
import {
  from,
  interval,
  take,
  takeLast,
  pipe,
  takeUntil,
  map,
  timer,
  fromEvent,
} from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent {
  constructor(private _dus: DesignUtilityService) {}
  randomNames = [
    'Anup',
    'Shekhar',
    'Sharma',
    'User',
    'Sender',
    'Receiver',
    'Subscriber',
  ];

  ngOnInit(): void {
    // Ex 01 take (5)

    const nameSource = from(this.randomNames);
    nameSource.pipe(take(5)).subscribe((res) =>
      // console.log(res)
      this._dus.print(res, 'elContainer15')
    );

    // Ex 02 takeLast (5)

    nameSource.pipe(takeLast(5)).subscribe((res) => {
      console.log(res);
      this._dus.print(res, 'elContainer16');
    });

    // Ex 03 takeUntil (condition)

    // nameSource.pipe(takeUntil)
    let condition = timer(5000);
    let condition1= fromEvent(document,'click');

    const source = interval(1000);
    source.pipe(map((res) => 'Number' + res),takeUntil(condition1)).subscribe((res) => {
      console.log(res);
      this._dus.print(res, 'elContainer17');
    });
  }
}
