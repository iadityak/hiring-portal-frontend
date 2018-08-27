import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidatesService } from '../candidates.service';

//import { CandidatesService } from '../candidates.service';
//import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
//import { Candidate } from '../candidate';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-search-candidates',
  templateUrl: './search-candidates.component.html',
  styleUrls: ['./search-candidates.component.css']
})
export class SearchCandidatesComponent implements OnInit {

  candidate=new Candidate;
candidates: Candidate[];
rForm: FormGroup;
  constructor(private candidatesService: CandidatesService,
              private location: Location,
              private fb: FormBuilder) {
                this.rForm = this.fb.group({
                  id:[''],
                  panCard   : ['',[Validators.required]],
                  firstName       : ['',[Validators.required]],
                  lastName         : ['',[Validators.required]],
                  mobileNumber    : ['',Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
                  candidateMailID         : ['',[Validators.required, Validators.email]],
                  });

                 }

  ngOnInit() {
            return this.candidatesService.getCandidates().then(candidates => this.candidates = candidates);
  }



  private search(): void {
    this.candidatesService. getCandidatebyPan(this.candidate.candidate_id).then(() => this.goBack());
  }

  onSubmit() {
    this.search();
  }



 goBack(): void {
    this.location.back();
  }

}
