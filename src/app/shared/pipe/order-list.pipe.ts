import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, ...args: string[]): TrackModel[] {
    if(args[0] === null || args[1] === null) return value
    const temporalList = value.sort((a,b) =>{
      console.log(a, b)
      if(a[ args[0] ] < b[ args[0] ]){
        return -1
      }else if(a[ args[0] ] === b[ args[0] ]){
        return 0
      }else if(a[ args[0] ] > b[ args[0] ]){
        return 1 
      } 
      return 1
    }) 
    return (args[1] === 'asc') ? temporalList : temporalList.reverse();
  }

}
