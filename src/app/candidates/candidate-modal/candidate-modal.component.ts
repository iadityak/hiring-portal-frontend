import { CandidatesService } from '../candidates.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Candidate } from '../candidate';
import { Location } from '@angular/common';

@Component({
  selector: 'app-candidate-modal',
  templateUrl: './candidate-modal.component.html',
  styleUrls: ['./candidate-modal.component.css']
})
export class CandidateModalComponent implements OnInit {
  candidate = new Candidate();
  constructor(private candidatesService: CandidatesService,
    private route: ActivatedRoute,
    private location: Location,) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.candidatesService.getCandidatebyPan(params['candidate_id']))
    .subscribe(response => this.candidate = response[0]);
  }

  goBack(): void {
    this.location.back();
  }
}
