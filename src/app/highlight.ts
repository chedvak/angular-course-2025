import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class Highlight {

  private el = inject(ElementRef<HTMLElement>);

  color = input<string>('yellow', {
    alias: 'appHighlight'
  });

  // constructor() {
  //   effect(() => {
  //     this.el.nativeElement.style.backgroundColor = this.color();
  //   });
  // }

   onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color();
  }

  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
