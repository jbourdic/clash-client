import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DetailComponent } from './detail.component';
import {DetailTestComponent} from "./detail-test.component";

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: DetailComponent, pathMatch: 'full' },
  { path: 'test', component: DetailTestComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DetailComponent,
    DetailTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class AboutModule {
  static routes = routes;
}
