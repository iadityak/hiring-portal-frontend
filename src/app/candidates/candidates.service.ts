import { router } from '../routing.module';
import { Candidate } from './candidate';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { Options, promise } from 'selenium-webdriver';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorResponse } from '../shared/ErrorResponse';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Globals } from '../../../globals';


@Injectable()
export class CandidatesService {
  private candidatesUrl: String;

  constructor(private http: Http, private router: Router, private location: Location, private globals: Globals) { 
    this.candidatesUrl  = globals.ROOT_URL;
  }



  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions();
  candidateUp = new Candidate();

  getCandidates(): Promise<Candidate[]> {
    const url = `${this.candidatesUrl}/allCandidate`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Candidate[]);

  }

  getRequirementID(): Promise<String[]> {
    const url = `${this.candidatesUrl}/getRequirementID`
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as String[]);
  }

  // getCandidatebyPan(candidate_id: String): Promise<Array<Candidate>> {
  //   const url = `${this.candidatesUrl}/candidateDetailbyPan?panCard=${candidate_id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json() as Array<Candidate>)
  //     .catch(this.handleError);
 // }

  getCandidatebyPan(candidate_id: String): Promise<Array<Candidate>> {
    const url = `${this.candidatesUrl}/candidateDetailbyPan?panCard=${candidate_id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Array<Candidate>)
      .catch(this.handleError);

  }

  candidateSearch(candidate_id: String, email: String, status: String, roundNumber: String, roundStatus: String, start: String, end: String): Promise<Array<Candidate>> {
    const url = `${this.candidatesUrl}/candidateSearch?panCard=${candidate_id}&emailID=${email}&status=${status}&roundNumber=${roundNumber}&roundStatus=${roundStatus}&start=${start}&end=${end}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Array<Candidate>)
      .catch(this.handleError);
  }

  // candidateRoundSearch(roundNumber: String, roundStatus: String): Promise<Array<Candidate>> {
  //   const url = `${this.candidatesUrl}/candidateRoundSearch?roundNumber=${roundNumber}&roundStatus=${roundStatus}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json() as Array<Candidate>)
  //     .catch(this.handleError);
  // }

  // getCandidatebyPan(candidate_id : String) {
  //   const url = `http://localhost:8081/candidateDetailbyPan?panCard=${candidate_id}`;
  //   return this.http.get(url);
  // }

  update(candidate: Candidate): Promise<Number> {


    const url = `${this.candidatesUrl}/editDetails`;
    return this.http.post(url, JSON.stringify(candidate), { headers: this.headers })
      .toPromise()
      .then(response => response.status as Number)
      .catch(this.handleError);

  }



  delete(id: number): Promise<void> {
    const url = `${this.candidatesUrl}/${id}`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null);
  }



  create(candidate: Candidate): Promise<Number> {
    const url = `${this.candidatesUrl}/addDetails`
    return this.http
      .post(url, JSON.stringify(candidate), { headers: this.headers })
      .toPromise()
      .then(response => response.status as Number)
      .catch(this.handleError);
  }

  private handleError(error: Response): Promise<any> {
    console.error('An error occurred', error);
    alert(error.json().errors[0] + ', try again.');
    return Promise.reject(error);
  }
  reqIDs: String[] = [''];



}
