import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  src:string = ''
  @Output() callBackData: EventEmitter<any> = new EventEmitter()
  callSearch(term: string){
    if( term.length >= 3 ){
      this.callBackData.emit(term)
    }
  }
}
