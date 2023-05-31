import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
})
export class Comp3Component implements OnInit {
  // userName = 'Anup'; // for subject
  userName = ''; // for behavior subject    , now we go tto service and write userName = new behaviourSubject<anyType>("Intial value any")
  constructor(private _du: DesignUtilityService) {
    this._du.userName.subscribe((res) => (this.userName = res));
  }
  ngOnInit(): void {}

  onChange(uName: any) {
    console.log(uName);
    this._du.userName.next(uName);
  }
}
