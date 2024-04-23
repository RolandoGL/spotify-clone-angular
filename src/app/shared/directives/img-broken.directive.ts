import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg:string = ''
  @HostListener('error') handleError(): void {
    console.log('🔴 Esta imagen revento -->', this._elementRef.nativeElement.src ='');
    const elemento = this._elementRef.nativeElement
    elemento.src = this.customImg


  }
  constructor( private _elementRef: ElementRef) { 
  }

}
