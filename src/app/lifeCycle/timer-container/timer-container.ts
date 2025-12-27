import { Component } from '@angular/core';
import { Timer } from "../timer/timer";

@Component({
  selector: 'app-timer-container',
  imports: [Timer],
  templateUrl: './timer-container.html',
  styleUrl: './timer-container.css'
})
export class TimerContainer {
  showTimer = false
}
