import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-routing';

  constructor(private router: Router) { }

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

    obsTest$.unsubscribe();

    const obsTest = function () {
      return 'Return from function';
      return 'Return 2 from function';
    }

    const returnData = obsTest();
    console.log(returnData);
  }

  onSubmit() {
    // this.router.navigate(['/posts']);
    // this.router.navigate(['/post', 1, 'postTitle']);
    this.router.navigate(['/posts'], { queryParams: { page: 1, order: 'newest'} });
  }
}
