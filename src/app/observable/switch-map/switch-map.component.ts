import { Component, OnInit } from '@angular/core';
import {
  delay,
  from,
  map,
  mergeAll,
  mergeMap,
  of,
  switchAll,
  switchMap,
} from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
  getData(data: any) {
    return of(data + 'Video uploaded').pipe(delay(1000));
  }
  constructor(private _du: DesignUtilityService) {}
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    // Ex-01 Map
    source.pipe(map((res) => this.getData(res))).subscribe((res2) => {
      res2.subscribe((res) => {
        this._du.print(res, 'elContainer');
      });
    });

    // Ex-02 map + Switch All
    source
      .pipe(
        map((res) => this.getData(res)),
        switchAll() // here we are using SwitchAll so no need to resubscribe but it will return only last stream since pre all will be cancel
      )
      .subscribe((res) => {
        this._du.print(res, 'elContainer1');
      });

    // Ex-03 SwitchMap = map + Switch All
    source
      .pipe(
        switchMap((res) => this.getData(res)) // here we are using SwitchMap() so no need to use map , switchAll it includes both
      )
      .subscribe((res) => {
        this._du.print(res, 'elContainer2');
      });
  }
}
