import { CandidatesService } from '../candidates.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Candidate } from '../candidate';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';



@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  rForm: FormGroup;
  candidate = new Candidate();
  submitted = false;
  constructor(private candidatesService: CandidatesService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
    this.rForm = new FormGroup({
      'candidate_id': new FormControl(''),
      'mailId': new FormControl(''),
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'mobileNumber': new FormControl(''),
      'status': new FormControl(''),
      'requirementID' : new FormControl(''),

   })

     }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.candidatesService.getCandidatebyPan('candidate_id'))
    .subscribe(candidate => this.candidate = candidate);
  }




  onSubmit(): void {
    this.submitted = true;
    this.candidatesService.update(this.candidate).then(() => this.goBack());

  }


  goBack(): void {
    this.location.back();
  }

}
