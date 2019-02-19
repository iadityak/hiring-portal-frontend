import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirements.service';
import { Requirement } from '../requirement';
import { RequirementModalComponent } from '../requirement-modal/requirement-modal.component';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {
  page: number = 1;

  headers = ['Requirement Id', 'Position', 'Vacancy Available', 'Job Location', 'Min Exp (years)','Status','Details', 'Close Requirement',];
  requirements: Requirement[];

  constructor(private requirementService: RequirementService,private modalService: NgbModal) { }

  ngOnInit() {
    return this.requirementService.getRequirements().then(requirements => this.requirements = requirements);
  }

  open(id) {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(RequirementModalComponent);
    modalRef.componentInstance.requirement = id;
  }

}
