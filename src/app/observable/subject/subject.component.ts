import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  // userName = 'Anup';    // for subject 
  userName = ''; // for subject behavior

  // Ex sharing data from service to mark exclusive badge on/off while on subject comp and change username among com1,2,3
  constructor(private _du: DesignUtilityService) {
    this._du.userName.subscribe((res) => (this.userName = res));
  }
  ngOnInit(): void {
    this._du.exclusive.next(true);
  }
  ngOnDestroy(): void {
    this._du.exclusive.next(false);
  }
}
