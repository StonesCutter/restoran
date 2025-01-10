import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { BookingComponent } from "./pages/booking/booking.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { ServicesComponent } from "./pages/services/services.component";
import { TeamComponent } from "./pages/team/team.component";
import { TestimonialComponent } from "./pages/testimonial/testimonial.component";

const routeConfig: Routes = [{
    path: '',
    component: HomeComponent,
    title: 'Home'
},{
    path: 'about',
    component: AboutComponent,
    title: 'About'
},
{
    path: 'booking',
    component: BookingComponent,
    title: 'Booking'
},
{
    path: 'contact',
    component: ContactComponent,
    title: 'Contact'
},
{
    path: 'menu',
    component: MenuComponent,
    title: 'Menu'
},
{
    path: 'service',
    component: ServicesComponent,
    title: 'Service'
},{
    path: 'team',
    component: TeamComponent,
    title: 'Team'
},{
    path: 'testimonial',
    component: TestimonialComponent,
    title: 'Testimonial'
},];

export default routeConfig;