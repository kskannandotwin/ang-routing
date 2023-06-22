import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {
      id: 1,
      title: 'Title 1',
      content: 'Lorem ipsum and so and so paragraph testing.'
    },
    {
      id: 2,
      title: 'Title 2',
      content: 'Lorem ipsum and so and so paragraph testing.'
    },
    {
      id: 3,
      title: 'Title 3',
      content: 'Lorem ipsum and so and so paragraph testing.'
    },
    {
      id: 4,
      title: 'Title 4',
      content: 'Lorem ipsum and so and so paragraph testing.'
    },
    {
      id: 5,
      title: 'Title 5',
      content: 'Lorem ipsum and so and so paragraph testing.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(value => {
      console.log(value);
      const page = value.get('page');
      const order = value.get('orderBy');
      console.log(page);
      console.log(order);
    });
  }
}
