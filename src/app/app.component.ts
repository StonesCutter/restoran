import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Router } from '@angular/router'; 
import { UtilsService } from './services/utils.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  isScrolledDown: boolean = false;
  title = 'Restoran';
  constructor(private router: Router, private utils: UtilsService) {
  }

  public innerWidth: any;
  currentPage: string = "";
  pageTitle: string = "";

  ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.utils.globalState$.subscribe((state) => {
        console.log('Global state changed:', state);
        this.currentPage = state;
        this.setPageTitle(state)
      });
  }

  setPageTitle(state: string){
    switch(state){
      case "":
        this.pageTitle = "Home"
        break;
      case "about":
        this.pageTitle = "About Us"
        break;
      case "service":
        this.pageTitle = "Services"
        break;
      case "menu":
        this.pageTitle = "Food Menu"
        break;
      case "contact":
        this.pageTitle = "Contact Us"
        break;
      case "booking":
        this.pageTitle = "Booking"
        break;
      case "team":
        this.pageTitle = "Our Team"
        break;
      case "testimonial":
        this.pageTitle = "Testimonial"
        break;
      default:
        this.pageTitle = "Restoran"
        break;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolledDown = document.documentElement.scrollTop > 80; 
  }
}

