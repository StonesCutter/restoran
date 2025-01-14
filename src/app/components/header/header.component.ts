import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isSticky: boolean = false; 
  isMenuOpen = false;
  pageSelected: number = 0;
  sectionSelected: number = 0;
  isOpenMobileMenuPage : boolean = false;

  // ICONS
  faUtensils = faUtensils; 
  faBars = faBars;
  faCaretDown = faCaretDown;


  @Input() windowWidth: number = 0;

  constructor(private router: Router, public utils: UtilsService) {}
 

  onButtonClicked() {
    this.router.navigate(['/contact']); 
  }

  navigateTo(path: string){
    this.utils.navigationUtil(path)
    this.router.navigate([path]); 
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isSticky = document.documentElement.scrollTop > 80; 
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectSection(section: number) {
    this.sectionSelected = section;
  }

  selectPage(page: number) {
    this.pageSelected = page;
  }

  openedMobileMenuPage(){
    this.isOpenMobileMenuPage = !this.isOpenMobileMenuPage
  }
}