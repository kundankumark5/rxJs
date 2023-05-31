import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  constructor() {}
  exclusive = new Subject<boolean>();
  // userName = new Subject<string>(); // for subject
  userName = new BehaviorSubject<string>('Ram'); // for behavior subject
  // videoEmit = new ReplaySubject<string>(3); //for replay subject  here no is for last specified no of values to get
  videoEmit = new ReplaySubject<string>(3, 5000); //here no and minisec where minisec for only last this time subscribed user get data
  asyncVideoEmit = new AsyncSubject();
  print(countVal: any, containerId: string) {
    let el = document.createElement('li');
    el.innerText = countVal;
    document.getElementById(containerId)?.appendChild(el);
  }
}
