import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home-component',
  templateUrl: './views-home-component.component.html',
  styleUrl: './views-home-component.component.css'
})
export class ViewsHomeComponentComponent {

  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' }
  ];


  items = [
    { image: 'assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put'
    }
  ];
}
