import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { concatMap, exhaustMap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss'],
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {
  url = 'https://jsonplaceholder.typicode.com/posts/1';
  num = 0;
  saveRequest: any;
  @ViewChild('btn') btn!: ElementRef;
  constructor(private _http: HttpClient) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(exhaustMap(() => this.onSave(this.num++)))
      .subscribe((res) => {
        console.log(res);
        this.onFetch();
      });
  }

  onSave(changes: number) {
    return this._http.put(this.url, { userId: changes });
  }
  onFetch() {
    this._http.get<any>(this.url).subscribe((res) => {
      console.log(res);

      this.saveRequest = res.userId;
    });
  }
}
