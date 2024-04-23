import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.css']
})
export class GenericSectionComponent {
  @Input() title:string = 'Title'
  @Input() mode:'small' | 'big' = 'small'
  @Input() dataTracks?:Array<TrackModel> 
}
