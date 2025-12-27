import { Component, inject, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css'
})
export class Timer implements OnInit{
  timerService = inject(TimerService)
  
 intervalId!: number;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.timerService.increment();
      console.log('timer:', this.timerService.seconds());
    }, 1000);
  }

}
