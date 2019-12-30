import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
@Directive({
  selector: '[appSquareColor]'
})
export class SquareColorDirective implements OnChanges{

  @Input('appSquareColor') textColor: string;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.color = this.getColor(this.textColor);
  }

  getColor(player) {
    if(player === 'X') {
      return 'var(--blue-color)';
    }
    return 'var(--yellow-color)';
  }
}
