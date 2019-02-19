import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterLink } from '@angular/router';
import { routes } from './routing.module';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CandidatesService } from './candidates/candidates.service';

import { RequirementService } from './requirements/requirements.service';

import { CandidatesComponent } from './candidates/candidates/candidates.component';
import { RequirementsComponent } from './requirements/requirements/requirements.component';

import { CandidateDetailsComponent } from './candidates/candidate-details/candidate-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddCandidateComponent } from './candidates/add-candidate/add-candidate.component';
import { AddRequirementComponent } from './requirements/add-requirement/add-requirement.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SearchCandidateComponent } from './candidates/search-candidates/search-candidate.component';
import { PaginationDemoComponent } from './candidates/pagination-demo/pagination-demo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InterviewService } from './interviews/interview.service';

import { CandidateModalComponent } from './candidates/candidate-modal/candidate-modal.component';
import { RequirementModalComponent } from './requirements/requirement-modal/requirement-modal.component';

import {HttpClient} from '@angular/common/http'
import { HttpClientModule } from "@angular/common/http";
import { Globals } from '../../globals';

import {NgxPaginationModule} from 'ngx-pagination';
import { RoundDetailComponent } from './candidates/round-detail/round-detail.component';


import { ModalReqWrapComponent } from './modal-req-wrap/modal-req-wrap.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateDetailsComponent,
    AddCandidateComponent,
    AddRequirementComponent,
    MainNavComponent,
    SearchCandidateComponent,
    WelcomeComponent,
    CandidateModalComponent,
    RequirementModalComponent,
    PaginationDemoComponent,
    RoundDetailComponent,
    RequirementsComponent,
    ModalReqWrapComponent,
  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    routes,
    BrowserModule,
    NgxPaginationModule,
  ],
  providers: [CandidatesService, RouterLink, InterviewService, Globals,RequirementService, NgbActiveModal ],
  bootstrap: [AppComponent,WelcomeComponent],
  entryComponents: [
    RequirementModalComponent
  ]
})
export class AppModule { }
