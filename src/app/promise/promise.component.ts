import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent {
  dellAvailable() {
    return false;
  }
  hpAvailable() {
    return false;
  }
  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');
      // reject('Promise is rejected');
      if (this.dellAvailable()) {
        return setTimeout(() => {
          resolve('Dell is purchased');
        }, 3000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve('HP is purchased');
        }, 3000);
      } else {
        return setTimeout(() => {
          reject('Laptop is not Available');
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => console.log('Success', res))
      .catch((res) => console.log('reject state', res));
  }
}
