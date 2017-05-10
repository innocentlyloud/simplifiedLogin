import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prek12Component } from './prek12.component';
import { SelectStudentComponent } from './select-student/select-student.component';
import { SelectClassComponent } from './select-class/select-class.component';
import { CodeValidatorComponent } from './code-validator/code-validator.component';
import {Prek12RoutingModule} from './prek12.routing.module';

import { SectionService } from '../../services/prek12/section.service';

@NgModule({
  imports: [
    CommonModule,
    //NgModule,
    Prek12RoutingModule
  ],
  declarations: [Prek12Component, SelectStudentComponent, SelectClassComponent, CodeValidatorComponent],
  exports: [Prek12Component],
  providers: [ SectionService ]
})
export class Prek12Module { }
