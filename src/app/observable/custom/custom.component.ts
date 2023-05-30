import { Component } from '@angular/core';
import { Observable, Subscription, count, observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent {
  constructor(private _designUtlityService: DesignUtilityService) {}
  techStatus: any;
  techStatus2: any;
  names: any;
  nameStatus: any='Running...';
  subs2!: Subscription;
  ngOnInit(): void {
    // Ex -01 (Manual observable) : using create to create manual observable and observer.error to show err and observer.complete to stop emmiting
    const cusObs = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      // observer.create();
      // observer.error();
      // observer.complete();
      setTimeout(() => {
        observer.next('JavaScript');
      }, 2000);
      setTimeout(() => {
        observer.next('TypeScript');
      }, 3000);
      setTimeout(() => {
        observer.next('HTML');
        // observer.error(new Error('Data exceed'));
      }, 4000);
      setTimeout(() => {
        observer.next('Scss');
        observer.complete();
      }, 5000);
    });
    cusObs.subscribe(
      (res: any) => {
        console.log(res);

        this._designUtlityService.print(res, 'elContainer11');
      },
      (err: any) => {
        this.techStatus = 'Error';
        console.log(err);
      },
      () => {
        this.techStatus = 'Completed';
      }

      // subscribe(data,err, completion)
      // subscribe's first argument is data second argument is error and third one is completion
    );
    // Ex -02 (custom Interval)
    const cusObs1 = Observable.create((observer: any) => {
      let count = 0;
      const courses = ['Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];
      setInterval(() => {
        observer.next(courses[count]);
        if (count >= 3) {
          // observer.complete();
          observer.error('Error emit');
        }
        count++;
      }, 1000);
    });

    this.subs2 = cusObs1.subscribe(
      (res: any) => {
        console.log(res);
        this._designUtlityService.print(res, 'elContainer12');
      },
      (err: any) => {
        this.techStatus2 = 'Error';
        console.log(err);
      },
      () => {
        this.techStatus2 = 'Completed';
      }
    );

    // Ex -03 (Random Names)
    const rNames = [
      'Anup',
      'Shekhar',
      'Sharma',
      'User',
      'Sender',
      'Receiver',
      'Subscriber',
    ];
    const cusObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(rNames[count]);
        count++;

        // if (count >= 4) {
        //   observer.error('Error emit');
        // }
        if (count >= 7) {
          observer.complete();
        }
      }, 1000);
    });

    cusObs2.subscribe(
      (res: any) => {
        console.log(res);

        this.names = res;
      },
      (err: any) => {
        console.log(err);
        this.nameStatus = 'Error';

      },
      () => {
        console.log('completed');
        this.nameStatus="Completed";
      }
    );
  }

  ngOnDestroy() {
    this.subs2.unsubscribe();
  }
}
