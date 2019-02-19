import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { CandidatesComponent } from './candidates/candidates/candidates.component';
import { RequirementsComponent } from './requirements/requirements/requirements.component';

import { CandidateDetailsComponent } from './candidates/candidate-details/candidate-details.component';

import { AddCandidateComponent } from './candidates/add-candidate/add-candidate.component';
import { AddRequirementComponent } from './requirements/add-requirement/add-requirement.component';

import { AppComponent } from './app.component';
import { SearchCandidateComponent } from './candidates/search-candidates/search-candidate.component';

import { WelcomeComponent } from './welcome/welcome.component';

import { CandidateModalComponent } from './candidates/candidate-modal/candidate-modal.component';
import { RequirementModalComponent } from './requirements/requirement-modal/requirement-modal.component';


import { RoundDetailComponent} from './candidates/round-detail/round-detail.component';



import { PaginationDemoComponent } from './candidates/pagination-demo/pagination-demo.component';

export const router: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent, data: {title: 'welcome', depth: 1}},
  {path: 'home', component: WelcomeComponent, data: {title:'welcome', depth: 1}},
  {path: 'candidates', component: CandidatesComponent, data: {title: 'candidates', depth: 2}},
  {path: 'candidates/detail/:candidate_id', component: CandidateDetailsComponent, data: {title:'details', depth: 3}},
  
  {path: 'candidate/Add' ,pathMatch: 'full',component: AddCandidateComponent,data: {title: 'welcome', depth: 1}},
  {path: 'requirement/Add' ,pathMatch: 'full',component: AddRequirementComponent,data: {title: 'welcome', depth: 1}},

  {path: 'candidate/Search', pathMatch: 'full',component: SearchCandidateComponent,data: {title: 'Search', depth: 1}},
  
  {path: 'candidates/All', pathMatch: 'full',component: CandidatesComponent,data: {title: 'candidates', depth: 1}},
  {path: 'requirements/All', pathMatch: 'full',component: RequirementsComponent,data: {title: 'requirements', depth: 1}},
  
  {path: 'candidates/view/:candidate_id', component: CandidateModalComponent, data: {title:'view',depth: 3}},
  {path: 'requirement/view/:id', component: RequirementModalComponent, data: {title:'reqView',depth: 3}},
  
  {path: 'candidates/demo', pathMatch: 'full',component: RoundDetailComponent,data: {title: 'candidates', depth: 1}},
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
