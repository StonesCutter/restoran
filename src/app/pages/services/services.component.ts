import { Component } from '@angular/core';
import { faUserTie} from '@fortawesome/free-solid-svg-icons';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { faHeadset} from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  faUserTie = faUserTie;
  faHeadset = faHeadset;
    faCartPlus = faCartPlus;
    faUtensils = faUtensils;
}
