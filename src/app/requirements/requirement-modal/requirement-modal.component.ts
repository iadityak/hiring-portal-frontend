import { Component, Input, OnInit } from '@angular/core';
import { RequirementService } from '../requirements.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Requirement } from '../requirement';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-requirement-modal',
  templateUrl: './requirement-modal.component.html',
  styleUrls: ['./requirement-modal.component.css']
})


export class RequirementModalComponent implements OnInit {

  
   @Input() requirement = new Requirement();

  constructor(private requirementService: RequirementService, private route: ActivatedRoute, private location: Location ) {

  }

  ngOnInit() {
    
    this.route.params
    .switchMap((params: Params) => this.requirementService.getRequirementbyID(params['id']))
    .subscribe(response =>{
      this.requirement = response[0];
    });
  }

}
