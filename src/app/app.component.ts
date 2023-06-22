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
    }).subscribe(value => {
      console.log(value);
    });

    const obsTest = function () {
      return 'Return from function';
    }

    const returnData = obsTest();
    console.log(returnData);
  }
}
