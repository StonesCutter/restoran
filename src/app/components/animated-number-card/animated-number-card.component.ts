import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-number-card',
  templateUrl: './animated-number-card.component.html',
  styleUrls: ['./animated-number-card.component.css']
})
export class AnimatedNumberCardComponent implements OnInit {
  @Input() targetNumber: number = 100; 
  @Input() duration: number = 5000; 
  @Input() title: string = "";
  @Input() text: string="";

  animatedNumber: number = 0;

  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation(): void {
    const interval = 50; 
    const steps = this.duration / interval;
    const increment = this.targetNumber / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= this.targetNumber) {
        current = this.targetNumber;
        clearInterval(timer);
      }
      this.animatedNumber = Math.floor(current);
    }, interval);
  }
}



