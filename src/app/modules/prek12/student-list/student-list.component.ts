import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router,ActivatedRoute,Params } from '@angular/router';

import { Student } from "../../../models/prek12/student";
import { Prek12Service } from '../../../services/prek12/prek12.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [ Prek12Service ]
})
export class StudentListComponent implements OnInit {
students: Student[];
  constructor(
    private service: Prek12Service,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id: number;
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    //console.log(id);
    this.students = this.service.getStudentsFromClassId(this.id);
  }
  onSelect(student: Student): void {
    this.router.navigate(['/prek12/section',this.id,'student', student.id]);
  }

}
