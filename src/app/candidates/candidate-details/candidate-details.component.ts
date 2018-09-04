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
      'candidateEmailID': new FormControl(''),
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'mobileNumber': new FormControl(''),
      'status': new FormControl(''),
      'requirementID' : new FormControl(''),
      'onlineTestScore' : new FormControl(''),
      'firstLevelName' : new FormControl(''),
      'firstLevelFeedback' : new FormControl(''),
      'dateOfOffer' : new FormControl(''),

      

   })

   //this.candidateList = new Array<Candidate>();

     }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.candidatesService.getCandidatebyPan(params['candidate_id']))
    .subscribe(response => this.candidate = response[0]);
  }




  onSubmit(): void {
     this.submitted = true;
    this.candidatesService.update(this.candidate).then(() => this.goBack());

  }


  goBack(): void {
    this.location.back();
  }

}
