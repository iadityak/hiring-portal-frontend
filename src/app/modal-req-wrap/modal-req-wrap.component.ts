import { Component, Input, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-req-wrap',
  templateUrl: './modal-req-wrap.component.html',
  styleUrls: ['./modal-req-wrap.component.css']
})
export class ModalReqWrapComponent implements OnInit {

  
  @Input() title = `Requirement Detail`;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
  }

}
