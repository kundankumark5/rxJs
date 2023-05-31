import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
  getData(data: any) {
    return of(data + 'Video uploaded');
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

    // Ex-02 map + merge All
    source
      .pipe(
        map((res) => this.getData(res)),
        mergeAll() // here we are using mergeAll so no need to resubscribe
      )
      .subscribe((res) => {
        this._du.print(res, 'elContainer1');
      });

    // Ex-03 mergeMap = map + merge All
    source
      .pipe(
        mergeMap((res) => this.getData(res)) // here we are using mergeMap() so no need to use map , mergeAll it includes both
      )
      .subscribe((res) => {
        this._du.print(res, 'elContainer2');
      });
  }
}
