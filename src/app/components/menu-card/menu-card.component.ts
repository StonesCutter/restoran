import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  @Input() title: string = ''; 
  @Input() text: string = ''; 
  @Input() price: string = ''; 
  @Input() image: string = ''; 
}
