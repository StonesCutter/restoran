import { Component } from '@angular/core';
import { faUserTie} from '@fortawesome/free-solid-svg-icons';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { faHeadset} from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  faUserTie = faUserTie;
  faHeadset = faHeadset;
    faCartPlus = faCartPlus;
    faUtensils = faUtensils;
    ImageAbout1 : string = "../../../assets/images/about-1.jpg"
    ImageAbout2 : string = "../../../assets/images/about-2.jpg"
    ImageAbout3 : string = "../../../assets/images/about-3.jpg"
    ImageAbout4 : string = "../../../assets/images/about-4.jpg"
  
    ImageTeam1: string = "../../../assets/images/team-1.jpg"
    ImageTeam2: string = "../../../assets/images/team-2.jpg"
    ImageTeam3: string = "../../../assets/images/team-3.jpg"
    ImageTeam4: string = "../../../assets/images/team-4.jpg"

    onButtonClicked(){
    
    }

}
