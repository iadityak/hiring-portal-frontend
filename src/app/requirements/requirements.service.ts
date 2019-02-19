import { router } from '../routing.module';
import { Requirement } from './requirement';
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
export class RequirementService {
    private requirementsUrl: String;

    constructor(private http: Http, private router: Router, private location: Location, private globals: Globals) { 
        this.requirementsUrl  = globals.ROOT_URL;
    }

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions();
    requirementUp = new Requirement();
  
    getRequirements(): Promise<Requirement[]> {
      const url = `${this.requirementsUrl}/allRequirement`;
      console.log(url);

      return this.http.get(url).toPromise().then(response => response.json() as Requirement[]);
  
    }

    getRequirementbyID(id: String): Promise<Array<Requirement>> {
      const url = `${this.requirementsUrl}/requirementDetailbyId?id=${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Array<Requirement>)
        .catch(this.handleError);
  
    }

    create(requirement: Requirement): Promise<Number> {
        const url = `${this.requirementsUrl}/addRequirement`
        return this.http
          .post(url, JSON.stringify(requirement), { headers: this.headers })
          .toPromise()
          .then(response => response.status as Number)
          .catch(this.handleError);
      }
    
      private handleError(error: Response): Promise<any> {
        console.error('An error occurred', error);
        alert(error.json().errors[0] + ', try again.');
        return Promise.reject(error);
      }



}