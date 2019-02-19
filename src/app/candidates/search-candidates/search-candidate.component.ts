import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidatesService } from '../candidates.service'
import { Location } from '@angular/common';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';


@Component({
  selector: 'app-search-candidates',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.css']
})
export class SearchCandidateComponent implements OnInit {

  //candidate:Candidate= new Candidate();
  candidateList: Array<Candidate>;
  searchForm: FormGroup;
  headers = ['PAN Number', 'Email', 'Name', 'Mobile', 'Status', 'RequirementID', 'Details', 'Edit'];
  username: string = '';
  email: string = '';
  status: string = '';
  roundNumber: string = '';
  roundStatus: string = '';
  start: string = '';
  end: string = '';
  show: boolean = false;
  error: boolean = false;

  constructor(private candidatesService: CandidatesService,
    private location: Location,
    private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      pan: new FormControl(null)
    });

    //this.candidate = new Candidate();

    this.candidateList = new Array<Candidate>();

    var can = this.searchForm.get('pan');

  }



  ngOnInit() {

    //return this.candidateListService.getcandidateList().then(candidateList => this.candidateList = candidateList);
  }



  // private search():void {
  // //  this.candidatesService.getCandidatebyPan(this.candidate.candidate_id).then(function(response){

  // //   console.log(response[0].candidate_id);
  // //  });



  private search(): void {
    console.log("Calling API --");
    this.error = false;
    this.candidatesService.candidateSearch(this.username, this.email, this.status, this.roundNumber, this.roundStatus, this.start, this.end).then
      (

      response => this.candidateList = response
      ).then(() => this.toggle());

  }

  // private search1(): void {
  //   console.log("Calling API --");
  //   this.error = false;
  //   this.candidatesService.candidateRoundSearch(this.roundNumber, this.roundStatus).then
  //     (

  //     response => this.candidateList = response
  //     ).then(() => this.toggle());

  // }

  toggle() {
    if (this.candidateList.length > 0) {
      this.show = true;
      this.error = false;
    }
    else {
      this.show = false;
      this.error = true;
    }
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("API...", event);
    this.search();
  }




  goBack(): void {
    this.location.back;
  }

}
