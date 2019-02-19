import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../candidates.service';
import { Candidate } from '../candidate';

@Component({
  selector: 'app-pagination-demo',
  templateUrl: './pagination-demo.component.html',
  styleUrls: ['./pagination-demo.component.css']
})
export class PaginationDemoComponent implements OnInit {

  page: number = 1;

  headers = ['PAN Number', 'Email', 'Name', 'Mobile', 'Status', 'RequirementID', 'Details', 'Edit',];
  candidates: Candidate[];


  constructor(private candidatesService: CandidatesService) { }

  ngOnInit() {
    return this.candidatesService.getCandidates().then(candidates => this.candidates = candidates);
  }



  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }


  delete(id: number): void {
    console.log("delete");
    this.candidatesService.delete(id).then(() => window.location.reload());
  }


}
