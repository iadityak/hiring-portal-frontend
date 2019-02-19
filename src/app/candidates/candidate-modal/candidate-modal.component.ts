import { CandidatesService } from '../candidates.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Candidate } from '../candidate';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-candidate-modal',
  templateUrl: './candidate-modal.component.html',
  styleUrls: ['./candidate-modal.component.css']
})
export class CandidateModalComponent implements OnInit {
  langs: number[] = [
    1,2,3,4,5,6,7,8,9,10
   ]
  candidate = new Candidate();
  first: boolean = false;
  interviewerName: string = '';
  second: boolean = false;
  third: boolean = false;
  isValid: boolean = false;
  isSelected: boolean = false;
  isRejected: boolean = false;
  roundCheck: boolean = true;
  rNum: string = '';
  technicalSkill: number = 0;
  commSkill: number = 0;
  confLevel: number = 0;
  otherSkill: number = 0;
  otherAttr: number = 0;
  myform: FormGroup;
  constructor(private candidatesService: CandidatesService,
    private route: ActivatedRoute,
    private location: Location, ) { 
      this.myform = new FormGroup({
        interviewerName: new FormControl(),
        technicalSkill: new FormControl(),
        confLevel: new FormControl(),
        commSkill: new FormControl(),
        otherSkill: new FormControl(),
        otherAttr: new FormControl()
      });
    }

  ngOnInit() {
    console.log("inside init");
    
    this.route.params
      .switchMap((params: Params) => this.candidatesService.getCandidatebyPan(params['candidate_id']))
      .subscribe(response =>{
        this.candidate = response[0]
        this.check();
      });
     
      
  }

  check(): void{
    if(this.candidate.status==="selected" || this.candidate.status==="Selected"){
      this.isSelected=true;this.roundCheck=false;
    }
    if(this.candidate.status==="Rejected" || this.candidate.status==="rejected"){
      this.isRejected=true;this.roundCheck=false;
    }
    if(this.candidate.status==="inprocess" || this.candidate.status==="Profile Created" || this.candidate.status==="Interview Process"){
      this.isValid=true;
    }
    if(this.candidate && this.candidate.interview && this.candidate.interview.firstLevelFeedback){
        this.first=true;
    }
    if(this.candidate.interview.secondLevelFeedback){
        this.second=true;
    }
    if(this.candidate.interview.thirdLevelFeedback){
        this.third=true;
    }
    if(this.second && !this.third){
      this.rNum="3";
    }
    if(this.first && !this.second){
      this.rNum="2";
    }
    if(!this.first){
      this.rNum="1";
    }
      console.log(this.second);
      console.log(this.third);
      console.log("I am here");
  }

  goBack(): void {
    this.location.back();
  }

  select(): void {
    
    if( this.second==true){
     
      this.candidate.interview.thirdLevelFeedback="cleared";
      this.candidate.interview.thirdLevelName=this.interviewerName;
    }
    else if( this.first==true){
     
      this.candidate.interview.secondLevelFeedback="cleared";
      this.candidate.interview.secondLevelName=this.interviewerName;
    }
    else if( this.first==false){
     
      this.candidate.interview.firstLevelFeedback="cleared";
      this.candidate.interview.firstLevelName=this.interviewerName;
    }
    this.candidate.status= "selected";
    this.candidatesService.update(this.candidate);
    console.log(this.candidate.status);
  }

  reject(): void {
    if( this.second==true){
     
      this.candidate.interview.thirdLevelFeedback="not cleared";
      this.candidate.interview.firstLevelName=this.interviewerName;
    }
    else if( this.first==true){
     
      this.candidate.interview.secondLevelFeedback="not cleared";
      this.candidate.interview.firstLevelName=this.interviewerName;
    }
    else if( this.first==false){
     
      this.candidate.interview.firstLevelFeedback="not cleared"
      this.candidate.interview.firstLevelName=this.interviewerName;
    }
    this.candidate.status = "rejected";
    this.candidatesService.update(this.candidate);
  }

  submit(): void{
    console.log(this.technicalSkill);
    console.log(this.commSkill);
    if(this.technicalSkill>=8 && this.commSkill>=8 && this.confLevel>=8 && this.otherSkill>=8 && this.otherAttr>=8){
      console.log(this.technicalSkill+this.commSkill+this.confLevel+this.otherSkill+this.otherAttr);
      if( this.second==true){
     
        this.candidate.interview.thirdLevelFeedback="cleared";
        this.candidate.status="selected";
        this.candidate.interview.thirdLevelName=this.interviewerName;

      }
      if( this.first==true){
       
        this.candidate.interview.secondLevelFeedback="cleared";
        this.candidate.interview.secondLevelName=this.interviewerName;

      }
      if( this.first==false){
       
        this.candidate.interview.firstLevelFeedback="cleared";
        this.candidate.status="inprocess";
        this.candidate.interview.firstLevelName=this.interviewerName;

      }
    }
    else{
      this.candidate.status="rejected";
    }
    this.candidatesService.update(this.candidate);
    console.log(this.candidate.status);
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Idemia Candidate Detail</title>
          <style>
           "../node_modules/bootstrap/dist/css/bootstrap.min.css"
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
