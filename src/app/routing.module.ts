import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CandidatesComponent } from './candidates/candidates/candidates.component';
import { CandidateDetailsComponent } from './candidates/candidate-details/candidate-details.component';
import { AddCandidateComponent } from './candidates/add-candidate/add-candidate.component';
import { AppComponent } from './app.component';
import { SearchCandidatesComponent } from './candidates/search-candidates/search-candidates.component';

import { WelcomeComponent } from './welcome/welcome.component';




export const router: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent, data: {title: 'welcome', depth: 1}},
  {path: 'home', component: AppComponent, data: {title:'home', depth: 1}},
  {path: 'candidates', component: CandidatesComponent, data: {title: 'candidates', depth: 2}},
  {path: 'candidates/detail/:id', component: CandidateDetailsComponent, data: {title:'details', depth: 3}},
  {path: 'candidate/Add' ,pathMatch: 'full',component: AddCandidateComponent,data: {title: 'welcome', depth: 1}},
  {path: 'candidate/Search', pathMatch: 'full',component: SearchCandidatesComponent,data: {title: 'Search', depth: 1}},
  {path: 'candidates/All', pathMatch: 'full',component: CandidatesComponent,data: {title: 'candidates', depth: 1}},
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
