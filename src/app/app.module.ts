import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/landing/home-components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HeaderComponent } from './components/landing/home-components/header/header.component';
import { TasksComponent } from './components/landing/home-components/tasks/tasks.component';
import { ExperienceComponent } from './components/landing/home-components/experience/experience.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { LandingPortfolioComponent } from './components/portfolio/landing-portfolio/landing-portfolio.component';
import { CountdownTimerComponent } from './components/portfolio/10-js-projects/countdown-timer/countdown-timer.component';
import { NotesAppComponent } from './components/portfolio/10-js-projects/notes-app/notes-app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    TasksComponent,
    ExperienceComponent,
    LandingPortfolioComponent,
    CountdownTimerComponent,
    NotesAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CollapseModule,
    AngularTypewriterEffectModule,
    BsDropdownModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
