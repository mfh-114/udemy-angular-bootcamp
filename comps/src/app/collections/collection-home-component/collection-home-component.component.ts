import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-home-component',
  templateUrl: './collection-home-component.component.html',
  styleUrl: './collection-home-component.component.css'
})
export class CollectionHomeComponentComponent {

  data = [
    {name: 'James', age: 24, job: 'Designer'},
    {name: 'Jill', age: 26, job: 'Engineer'},
    {name: 'Elyse', age: 25, job: 'Engineer'}
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]

  constructor(){
    
  }
}
