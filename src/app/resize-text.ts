import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appResizeText]',
   host: {
    '(click)': 'toggleSize()' // אירוע קליק על האלמנט
  }
})
export class ResizeText {
private el = inject(ElementRef<HTMLElement>);

  // גודל טקסט התחלתי (signal)
  size = input<number>(16, { alias: 'appResizeText' });

  private enlarged = false; // מצב אם מוגדל או לא

  constructor() {
    // מציג את הגודל ההתחלתי
    effect(() => {
      this.el.nativeElement.style.fontSize = this.size() + 'px';
    });
  }

  toggleSize() {
    this.enlarged = !this.enlarged;
    this.el.nativeElement.style.fontSize =
      this.enlarged ? this.size() * 2 + 'px' : this.size() + 'px';
  }

}
