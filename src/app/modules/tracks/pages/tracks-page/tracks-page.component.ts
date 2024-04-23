import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
// import * as dataRaw from '../../../../data/tracks.json'
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  // mockTrackList:Array<TrackModel> = []
  trendingSongs: TrackModel[] = []
  randomSongs: TrackModel[] = []
  observesList: Array<Subscription> = []
  constructor( private _tracksService: TrackService) { 
  }

  ngOnInit(): void {
    // const observer1 = this._tracksService.dataTrendingTracks$.subscribe(response => this.trendingSongs = response)
    // const observer2 = this._tracksService.dataRandomTracks$.subscribe(response => this.randomSongs = [...this.randomSongs, ...response])
    // this.observesList = [observer1, observer2]

    this._tracksService.getAllTracks().subscribe( (track:TrackModel[]) => this.trendingSongs = track, err => console.log('error'))
    this._tracksService.getRandomTracks().subscribe( (track:TrackModel[]) => this.randomSongs = track)
  }
  ngOnDestroy(): void {
      this.observesList.forEach(item => item.unsubscribe())
  }
}
