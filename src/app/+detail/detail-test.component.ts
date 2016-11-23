import { Component } from '@angular/core';

@Component({
  selector: 'detail',
  template: `
    <h1>Hello from Detail testiiiiing</h1>
    <router-outlet></router-outlet>
  `
})
export class DetailTestComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
