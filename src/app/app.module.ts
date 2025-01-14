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
    CoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatMenuModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
