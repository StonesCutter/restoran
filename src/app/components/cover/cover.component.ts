import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  @Input() title: string = ''; 
  @Input() path: string = ''; 
  @Input() windowWidth: number = 0;
  rotationDegree: number = 0;
  isHomepage: boolean = false;

    constructor(private router: Router) {}

  ngOnInit(): void {
    this.isHomepage = this.path === "" ? true : false;
    if (this.isHomepage) {
      setInterval(() => {
        this.rotationDegree = (this.rotationDegree + 0.24) % 360;
      }, 30); 
    }
  }

  onButtonClicked() {
    this.router.navigate(['/contact']); 
  }
}


