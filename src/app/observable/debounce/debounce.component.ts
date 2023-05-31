import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { fromEvent, map, debounceTime,distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss'],
})
export class DebounceComponent implements AfterViewInit {
  @ViewChild('myInput') myInput!: ElementRef;
  @ViewChild('myInput2') myInput2!: ElementRef;
  reqData: any = null;
  reqData2: any = null;
  constructor() {}
  ngAfterViewInit(): void {
    // Ex-01 Debounce time
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(1000)
    );
    searchTerm.subscribe((res) => {
      console.log(res);
      this.reqData = res;
      setTimeout(() => {
        this.reqData = null;
      }, 3000);
    });

    // Ex-02 Distinct until Change

    const SearchTerm2 = fromEvent<any>(
      this.myInput2.nativeElement,
      'keyup'
    ).pipe(
      map((event) => event.target.value),
      debounceTime(1000),
distinctUntilChanged()
    );

    SearchTerm2.subscribe((res) => {
      console.log(res);
      this.reqData2 = res;
      setTimeout(() => {
        this.reqData2 = null;
      }, 2000);
    });
  }
}
