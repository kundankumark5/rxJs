import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent {
  constructor(private _designUtilityService: DesignUtilityService) {}
  obsMsg: any;
  ngOnInit(): void {
    // of

    const obs1 = of('Anup', 'Shekhar', 'Sharma');
    obs1.subscribe((res) => {
      console.log(res);
      this._designUtilityService.print(res, 'elContainer6');
    });

    const obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });
    obs2.subscribe((res) => {
      this.obsMsg = res;
      console.log(this.obsMsg);
    });

    // From array

    const obs3 = from(['User', 'Sender', 'Receiver']);
    obs3.subscribe((res) => {
      console.log(res);
      this._designUtilityService.print(res, 'elContainer8');
    });
    // From promise

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 3000);
    });
    promise.then((resolve) => console.log(resolve));

    const obs4 = from(promise);
    obs4.subscribe((res) => {
      console.log(res);
      this._designUtilityService.print(res, 'elContainer9');
    });

    // From string
    const obs5 = from('Welcome to Rxjs');
    obs5.subscribe((res) => {
      console.log('from String', res);
      this._designUtilityService.print(res, 'elContainer10    ');
    });
  }
}
