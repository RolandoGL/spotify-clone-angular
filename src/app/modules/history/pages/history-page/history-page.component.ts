import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  resultList: Observable<any> = of([])
  constructor( private _searchService: SearchService){}

  reciveData(event: string){
    console.log(event)
    this.resultList = this._searchService.searchTracks(event)
  }
}
