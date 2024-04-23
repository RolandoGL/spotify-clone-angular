import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
   @Input() mainMenu?: {defaultOptions:Array<any>, accessLink:Array<any>, customOptions:Array<any>} = {
    defaultOptions:[
      {
        name:'home',
        icon:'home',
        router:'/'
      }
    ],
    accessLink:[
      {
        name:'home',
        icon:'home'
      }
    ],
    customOptions:[
      {
        name:'home',
        router:'home'
      }
    ]
   }
}
