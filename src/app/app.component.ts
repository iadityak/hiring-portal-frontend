import { Component, OnInit } from '@angular/core';

import { trigger, transition, group, query, style, animate} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3, 3 => 2', [
          style({ height: '!' }),
          query(':enter', style({ transform: 'translateX(100%)' })),
          query(':enter, :leave', style({ position: 'absolute'})),
          // animate the leave page away
          group([
              query(':leave', [
                  animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
              ]),
              // and now reveal the enter
              query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
          ]),
      ]),
     ])
      ]
})
export class AppComponent implements OnInit{
  title = 'app';
  Constant: string [];
 
   
  constructor()
  {}
  ngOnInit() {
   
    }
  

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

}
