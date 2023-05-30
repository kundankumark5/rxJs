import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss'],
})
export class FormEventComponent {
  @ViewChild('addBtn')
  addBtn!: ElementRef;
  constructor(private _designUtility : DesignUtilityService) {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
    let countVal = 'video' + count++;
      console.log(countVal);
      this._designUtility.print(countVal, 'elContainer');
      this._designUtility.print(countVal, 'elContainer2');
    });
  }

}
