import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callBack: EventEmitter <any> = new EventEmitter<any>()
  timeLapsed: BehaviorSubject<string> = new BehaviorSubject('00:00')
  timeRemaining: BehaviorSubject<string> = new BehaviorSubject('-00:00')
  playerStatus: BehaviorSubject<string> = new BehaviorSubject('paused')
  playerPrecent: BehaviorSubject<number> = new BehaviorSubject(0)
  public audio!:HTMLAudioElement
  public trackInfo: BehaviorSubject<any> = new BehaviorSubject(undefined)
  constructor() {
    this.audio = new Audio()
    this.trackInfo.subscribe( res =>{
      if(res){
        this.setAudio(res)
      }
    } )

    this.listenAllEvents()
   }

  public setAudio(track: TrackModel){
    this.audio.src = track.url
    this.audio.play()
  }

  private listenAllEvents(){
    this.audio.addEventListener('timeupdate', this.calculateTime, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)
  }

  private calculateTime = ()=>{
    const { duration, currentTime } = this.audio
    this.setTimeLapsed(currentTime)
    this.setTimeRemaining(currentTime, duration)
    this.setPrecentage(currentTime, duration)
  }

  private setTimeLapsed( currentTime: number){
    let seconds = Math.floor(currentTime % 60)
    let minutes = Math.floor( (currentTime / 60) %60)
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
    const displayMinutes = minutes < 10 ? `0${minutes}` : seconds
    const displayFormat =  displayMinutes+':'+displaySeconds
    this.timeLapsed.next(displayFormat)
  }

  private setTimeRemaining( currentTime: number, duration:number ){
    let timeLeft = duration - currentTime
    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor( (timeLeft / 60) %60)
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
    const displayMinutes = minutes < 10 ? `0${minutes}` : seconds
    const displayFormat =  '-'+displayMinutes+':'+displaySeconds
    this.timeRemaining.next(displayFormat)
  }

  private setPlayerStatus = (state:any)=>{
    switch (state.type) {
      case 'play':
        this.playerStatus.next('play')
        break;
      case 'playing':
          this.playerStatus.next('playing')
          break;
      case 'ended':
            this.playerStatus.next('ended')
            break;
      default:
        this.playerStatus.next('paused')
        break;
    }
  }

  public tooglePlayer(){
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  private setPrecentage(currentTime:number, duration:number){
    let precentage = (currentTime*100)/duration
    this.playerPrecent.next(precentage)
  }
}
