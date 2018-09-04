import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterLink } from '@angular/router';
import { routes } from './routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CandidatesService } from './candidates/candidates.service';
import { CandidatesComponent } from './candidates/candidates/candidates.component';
import { CandidateDetailsComponent } from './candidates/candidate-details/candidate-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCandidateComponent } from './candidates/add-candidate/add-candidate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SearchCandidateComponent } from './candidates/search-candidates/search-candidate.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { InterviewService } from './interviews/interview.service';

import { CandidateModalComponent } from './candidates/candidate-modal/candidate-modal.component';
import {HttpClient} from '@angular/common/http'
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateDetailsComponent,
    AddCandidateComponent,
    MainNavComponent,
    SearchCandidateComponent,
    WelcomeComponent,
    CandidateModalComponent,


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    routes,
    BrowserModule,
    
  ],
  providers: [CandidatesService, RouterLink, InterviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
