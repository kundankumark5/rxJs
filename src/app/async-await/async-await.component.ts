import { Component } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss'],
})
export class AsyncAwaitComponent {
  data: any = 'data';
  data1: any = 'data';
  data2: any = 'data';
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data Received');
    }, 3000);
    reject('not found');
  });

  async getData() {
    // async function always returns promise
    // return 'data received';
    let response = await this.promise;
    console.log(response);
  }
  ngOnInit(): void {
    -(
      // this.getData().then((data) => console.log(data));
      // this.getData().then(console.log);
      this.getData()
    );
  }
  dell = {
    brand: 'dell',
    hardDisk: '2TB',
    color: 'black',
  };
  hp = {
    brand: 'hp',
    hardDisk: '1TB',
    color: 'silver',
  };

  buyLaptop = new Promise((resolve, reject) => {
    if (this.dell) {
      setTimeout(() => {
        resolve(this.dell);
      }, 3000);
    } else reject('not found');
  });

  buylaptop2 = fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );

  // ex 1 fetch data with promise

  fetch1() {
    this.data = 'fetching data....';
    this.buyLaptop
      .then((res) => {
        this.data = JSON.stringify(res);
        console.log(this.data);
      })
      .catch((res) => {
        this.data = res;
        console.log(res);
      });
  }

  // ex 2 fetch data with async/await

  async fetch2() {
    this.data1 = 'fetching data....';
    let data = await this.buyLaptop;
    this.data1 = JSON.stringify(data);
  }

  // ex 3 fetch data with rest api

  async fetch3() {
    this.data2 = 'fetching data....';
    await this.buylaptop2.then((res) => {
      this.data2 = JSON.stringify(res);
      console.log(res);
    });
  }
}
