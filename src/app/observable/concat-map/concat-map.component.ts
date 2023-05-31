import { Component, OnInit } from '@angular/core';
import { concatAll, from, map, of, delay, concatMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
  getData(data: any) {
    return of(data + 'Video uploaded').pipe(delay(2000));
  }
  constructor(private _du: DesignUtilityService) {}
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    // Ex -01 Map
    source.pipe(map((res) => this.getData(res))).subscribe((res1) =>
      res1.subscribe((res) => {
        this._du.print(res, 'elContainer');
      })
    );

    // Ex -02 Map + concatAll
    source
      .pipe(
        map((res) => this.getData(res)),
        concatAll()
      )
      .subscribe((res1) => this._du.print(res1, 'elContainer1'));
    // Ex -03 concatMap = Map + concatAll
    source
      .pipe(concatMap((res) => this.getData(res)))
      .subscribe((res1) => this._du.print(res1, 'elContainer2'));
  }
}
