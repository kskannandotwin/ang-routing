import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-routing';

  constructor() { }

  ngOnInit() {
    const obsTest$ = new Observable(observer => {
      observer.next('Returned from observable');
      observer.next('This is the second return from observable');

      setTimeout(() => {
        observer.next('This is from timeout function');
      }, 2000);

      observer.next('This is the third return from observable');
    }).subscribe(value => {
      console.log(value);
    });

    const obsTest = function () {
      return 'Return from function';
      return 'Return 2 from function';
    }

    const returnData = obsTest();
    console.log(returnData);
  }
}
