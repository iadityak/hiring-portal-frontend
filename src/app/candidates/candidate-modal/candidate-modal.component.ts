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
