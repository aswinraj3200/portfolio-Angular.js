import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({opacity: 0}),
        animate(2000)
      ]),
      transition('* => void',[
        animate(2000,style({opacity:0}))
      ])
    ])
  ]
})
export class ServicesComponent {

}
