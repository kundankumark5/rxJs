import { Component } from '@angular/core';
import { Subscription, from, interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent {
  sourceSub!: Subscription;

  users = [
    { name: 'Anup', Skill: 'Angular' },
    { name: 'Shekhar', Skill: 'JavaScript' },
    { name: 'Sharma', Skill: 'TypeScript' },
    { name: 'User', Skill: 'HTML' },
  ];
  constructor() {}
  ngOnInit(): void {
    const source = interval(1000);
    // this.sourceSub = source.subscribe((res) => {
    //   console.log(res);
    //   if (res >= 7) {
    //     this.sourceSub.unsubscribe();
    //   }
    // });

    // now we will use pipe to convert upper res to store into array, and take operator to insert only desired no of streams
    // ex o1
    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    });

    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
