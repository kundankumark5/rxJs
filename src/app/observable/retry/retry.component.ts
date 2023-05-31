import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, pipe, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  person: any;
  fetching: boolean = false;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}

  fetchApi() {
    this.fetching = true;
    this._http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        // retry(4)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount += 1;
                console.log('retryCount=>'+ retryCount);
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        (res) => {
          this.person = res;
          console.log(res);
          this.fetching = false;
        },
        (err) => {
          console.log(err);
          this.fetching = false;
        },
        () => console.log('success')
      );
  }
}
