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
import { SearchCandidatesComponent } from './candidates/search-candidates/search-candidates.component';

import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateDetailsComponent,
    AddCandidateComponent,
    MainNavComponent,
    SearchCandidatesComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [CandidatesService, RouterLink, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
