import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BookingComponent } from './pages/booking/booking.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SquaredButtonComponent } from './components/squared-button/squared-button.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverComponent } from './components/cover/cover.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardServiceComponent } from './components/card-service/card-service.component';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { AnimatedNumberCardComponent } from './components/animated-number-card/animated-number-card.component';
import { ChefCardComponent } from './components/chef-card/chef-card.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    MenuComponent,
    BookingComponent,
    TeamComponent,
    TestimonialComponent,
    ContactComponent,
    HeaderComponent,
    SquaredButtonComponent,
    CoverComponent,
    FooterComponent,
    CardServiceComponent,
    MenuCardComponent,
    AnimatedNumberCardComponent,
    ChefCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatMenuModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    MatMenuModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
