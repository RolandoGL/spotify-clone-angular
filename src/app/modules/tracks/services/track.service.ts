import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, map, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api

  constructor( private _httpClient: HttpClient) {
  }

  getAllTracks():Observable<TrackModel[]>{
    return this._httpClient.get<TrackModel[]>(this.URL+'/tracks').pipe( map( (response:any) => response.data ) )
  }
  getRandomTracks():Observable<TrackModel[]>{
    return this._httpClient.get<TrackModel[]>(this.URL+'/tracks')
    .pipe( 
      map( (response:any) => response.data.reverse() )
    )
  }
}
