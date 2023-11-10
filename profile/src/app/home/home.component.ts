import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger,state,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent {
  constructor(private a:Title){
    this.a.setTitle('aswin-home')
  }
}