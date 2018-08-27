import { router } from '../routing.module';
import { Candidate } from './candidate';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { Options, promise } from 'selenium-webdriver';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorResponse } from '../shared/ErrorResponse';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class CandidatesService {


  constructor(private http: Http, private router: Router, private location: Location) { }

  private candidatesUrl = 'http://localhost:8081/addCandidate';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions();
  candidateUp = new Candidate();

  getCandidates(): Promise<Candidate[]> {
    return this.http.get('http://localhost:8081/allCandidate')
    .toPromise()
    .then(response => response.json() as Candidate[]);
    
  }

  getCandidatebyPan(candidate_id : String): Promise<Candidate>{
    const url = `http://localhost:8081/candidateDetailbyPan?panCard=${candidate_id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Candidate);
  }



  update(candidate: Candidate): Promise<Candidate>{


    const url =`${this.candidatesUrl}/${candidate.candidate_id}`;
    return this.http.put(url, JSON.stringify(candidate), {headers: this.headers})
    .toPromise()
    .then(() => candidate)
    .catch(this.handleError);

  }



  delete(id: number): Promise<void> {
    const url = `${this.candidatesUrl}/${id}`;
    return this.http.delete(url)
    .toPromise()
    .then(() => null);
  }



  create(candidate: Candidate): Promise<Candidate> {
    return this.http
    .post('http://localhost:8081/addCandidate', JSON.stringify(candidate), {headers: this.headers})
    .toPromise()
    .then(() => candidate)
    .catch(this.handleError);
  }

  private handleError(error: Response): Promise<any>{
    console.error('An error occurred', error);
    alert(error.json().errors[0] + ', try again.');
    return Promise.reject(error);
 }
 reqIDs: String[] = [''];

 getRequirementID(): Promise<String[]>  {
    var arr =[];
    return this.http.get('http://localhost:8081/requirementID')
   .toPromise()
   .then(response => response.json() as String[]);
  }

}
