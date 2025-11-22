import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-box',
  imports: [],
  templateUrl: './color-box.html',
  styleUrl: './color-box.css',
})
export class ColorBox {
  @Input() color!: string;
  @Input() isCorrect!: boolean;

  clicked = false;
  borderColor = 'black';

  onClick() {
    if (this.clicked) return;
    this.clicked = true;
    this.borderColor = this.isCorrect ? 'green' : 'red';
  }
}
