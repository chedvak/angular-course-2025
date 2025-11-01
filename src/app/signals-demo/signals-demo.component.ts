import { Component, effect, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.css']
})
export class SignalsDemoComponent {
  count = signal(0);
  name = signal('Chedva');

  double = computed(() => this.count() * 2);

  // effect runs whenever any accessed signal/computed changes
  private _logEffect = effect(() => {
    console.log('count:', this.count(), 'double:', this.double(), 'name:', this.name());
  });

  increment() {
    this.count.update(n => n + 1);
  }

  setName(n: string) {
    this.name.set(n);
  }
}