import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../candidates.service';
import { Candidate } from '../candidate';
import { trigger, transition, group, query, style, animate} from '@angular/animations';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']

    })

export class CandidatesComponent implements OnInit {

  headers=['PAN Number', 'Email', 'Name', 'Mobile','Status','RequirementID','Details','Edit',];
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
