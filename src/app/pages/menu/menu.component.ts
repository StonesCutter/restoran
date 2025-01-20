import { Component, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { faMugSaucer} from '@fortawesome/free-solid-svg-icons';
import { faBurger} from '@fortawesome/free-solid-svg-icons';
import { faUtensils} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {

  //Icons
  faMugSaucer = faMugSaucer;
  faBurger = faBurger;
  faUtensils = faUtensils;

  //Images
  ImageMenu1: string = "../../../assets/images/menu-1.jpg";
  ImageMenu2: string = "../../../assets/images/menu-2.jpg";
  ImageMenu3: string = "../../../assets/images/menu-3.jpg";
  ImageMenu4: string = "../../../assets/images/menu-4.jpg";
  ImageMenu5: string = "../../../assets/images/menu-5.jpg";
  ImageMenu6: string = "../../../assets/images/menu-6.jpg";
  ImageMenu7: string = "../../../assets/images/menu-7.jpg";
  ImageMenu8: string = "../../../assets/images/menu-8.jpg";

  //Menu dishes

  dishes = [{
    title: "Chicken Burger",
    text: "Ipsum ipsum clita erat amet dolor justo diam",
    price: "$115",
    image: this.ImageMenu1,
  },{
    title: "Chicken Burger",
    text: "Ipsum ipsum clita erat amet dolor justo diam",
    price: "$115",
    image: this.ImageMenu2,
  },{
    title: "Chicken Burger",
    text: "Ipsum ipsum clita erat amet dolor justo diam",
    price: "$115",
    image: this.ImageMenu3,
  },{
    title: "Chicken Burger",
    text: "Ipsum ipsum clita erat amet dolor justo diam",
    price: "$115",
    image: this.ImageMenu4,
  },{
    title: "Chicken Burger",
    text: "Ipsum ipsum clita erat amet dolor justo diam",
    price: "$115",
    image: this.ImageMenu5,
  },{
    title: "Chicken Burger",
    text: "Ipsum ipsum clita erat amet dolor justo diam",
    price: "$115",
    image: this.ImageMenu6,
  },{
    title: "Chicken Burger",
    text: "Ipsum ipsum clita erat amet dolor justo diam",
    price: "$115",
    image: this.ImageMenu7,
  },{
    title: "Chicken Burger",
    text: "Ipsum ipsum clita erat amet dolor justo diam",
    price: "$115",
    image: this.ImageMenu8,
  },]
  selectedTab: number = 0; // Default selected tab

  onTabSelected(event: MatTabChangeEvent) {
    console.log('Selected index:', event.index); 
    this.selectedTab = event.index;
    
  }
  
}
