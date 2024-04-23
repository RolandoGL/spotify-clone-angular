import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  mainMenu:{ defaultOptions:any, accessLink:any, customOptions:any} = {
    defaultOptions:[
      {
        name:'Home',
        icon:'uil-estate',
        router:['/', 'tracks']
      },
      {
        name:'Search',
        icon:'uil-search',
        router: ['/', 'history']
      },
      {
        name:'Liked songs',
        icon:'uil-heart',
        router: ['/', 'favorite']
      }
    ],
    accessLink:[
      {
        name:'Your Playlist',
        icon:'uil-books'
      },
      
    ],
    customOptions:[
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º1',
        router: ['/']
      },
    ]
   }
}
