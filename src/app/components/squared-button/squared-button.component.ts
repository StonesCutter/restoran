import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-squared-button',
  templateUrl: './squared-button.component.html',
  styleUrls: ['./squared-button.component.css']
})
export class SquaredButtonComponent {
  @Input() buttonText = 'Click'; 
  @Input() heightSelected = '40px'
  @Output() buttonClicked = new EventEmitter<void>(); 

  onClick() {
    this.buttonClicked.emit(); 
  }

}
