import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  isScrolledDown: boolean = false;
  title = 'Restoran';
  constructor(private router: Router) {}

  public innerWidth: any;

  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  navigateToHome() {
    this.router.navigate(['/about']); 
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolledDown = document.documentElement.scrollTop > 80; 
  }


}
