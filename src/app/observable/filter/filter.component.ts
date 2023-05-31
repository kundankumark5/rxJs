import { filter, from, toArray } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  dataArr = [
    { id: 1, name: 'Anup', gender: 'Male' },
    { id: 2, name: 'Priyanka', gender: 'feMale' },
    { id: 3, name: 'Ashish', gender: 'Male' },
    { id: 4, name: 'Vivek', gender: 'Male' },
    { id: 5, name: 'Jaya', gender: 'feMale' },
    { id: 6, name: 'Monika', gender: 'feMale' },
    { id: 7, name: 'Rajesh', gender: 'Male' },
    { id: 8, name: 'Sanjana', gender: 'feMale' },
    { id: 9, name: 'Neha', gender: 'feMale' },
    { id: 10, name: 'Sakshi', gender: 'feMale' },
    { id: 11, name: 'Neeraj', gender: 'Male' },
    { id: 12, name: 'Pradeep', gender: 'Male' },
  ];

  constructor() {}
  data: any;
  data2: any;
  data3: any;
  ngOnInit(): void {
    const source = from(this.dataArr);

    // ex-01 Filter By Length
    source
      .pipe(
        filter((member) => member.name.length >= 6),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    // ex-02 Filter By Gender

    source
      .pipe(
        filter((member) => member.gender == 'feMale'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });

    // ex-03 Filter By nth Item

    source
      .pipe(
        filter((member) => member.id <= 6),
        toArray()
      )
      .subscribe((res) => (this.data3 = res));
  }
}
