import { Component } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent {
  constructor() {}
  data: any = [];
  data1: any = [];
  users = [
    {
      name: 'Anup',
      skills: 'Angular',
      job: {
        title: 'Angular Developer',
        exp: '10 Years',
      },
    },
    {
      name: 'Raman',
      skills: 'Typescript',
      job: {
        title: 'Typescript Developer',
        exp: '10 Years',
      },
    },
    {
      name: 'Rajiv',
      skills: 'Javascript',
      job: {
        title: 'Javascript Developer',
        exp: '10 Years',
      },
    },
    {
      name: 'Rohit',
      skills: 'Html & css',
      job: {
        title: 'UI Developer',
        exp: '10 Years',
      },
    },
  ];

  ngOnInit(): void {
    // ex -01

    from(this.users)
      .pipe(
        // map((data: any) => data.name),
        pluck('name'), // using pluck instead of map
        toArray()
      )
      .subscribe((res) => {
        this.data = res;
        console.log(res);
      });

    // ex -02

    from(this.users)
      .pipe(pluck('job', 'title'), toArray())
      .subscribe((res) => {
        this.data1 = res;
        console.log(res)
      });
  }
}
