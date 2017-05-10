import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prek12Component }   from './prek12.component';

const routes: Routes = [
  { path: 'prek12',  component: Prek12Component }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class Prek12RoutingModule {}