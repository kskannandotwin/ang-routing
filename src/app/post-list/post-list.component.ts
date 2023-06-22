import { Component } from '@angular/core';

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
}
