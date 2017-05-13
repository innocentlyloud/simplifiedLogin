import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router,ActivatedRoute,Params } from '@angular/router';

import { Section } from '../../../models/prek12/section';
import { Prek12Service } from '../../../services/prek12/prek12.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
  providers: [ Prek12Service ]
})
export class SectionListComponent implements OnInit {
 sections: Section[];
  constructor(
    private service: Prek12Service,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sections = this.service.getSections();
  }
  onSelect(section: Section): void {
    this.router.navigate(['/prek12/section', section.id,'students']);
  }

}
