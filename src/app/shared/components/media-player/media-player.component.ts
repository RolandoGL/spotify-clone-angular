import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover!: TrackModel 
  observersList: Array<Subscription> = []
  state:string = 'paused'
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  constructor( public _multimediaService:MultimediaService){

  }
  ngOnInit(): void {
    //  const observer1: Subscription = this._multimediaService.callBack.subscribe( ( track:TrackModel )=> track ) 
     
    //  this.observersList =[observer1]

    this._multimediaService.trackInfo.subscribe( res =>{

    })
    const observer = this._multimediaService.playerStatus.subscribe( status => this.state = status)
  }
  ngOnDestroy(): void {
    this.observersList.forEach( item => item.unsubscribe())
  }

  handlePosition(event: MouseEvent): void {
     
  }

}
