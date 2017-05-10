import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router,ActivatedRoute,Params } from '@angular/router';

import { Section } from "../../../models/prek12/section";
import { SectionService } from '../../../services/prek12/section.service';

@Component({
  selector: 'app-select-student',
  templateUrl: './select-student.component.html',
  styleUrls: ['./select-student.component.scss'],
  providers: [ SectionService ]

})
export class SelectStudentComponent implements OnInit {
  sections: Section[];
  constructor(
    private service: SectionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sections = this.service.getSections();
  }

}
