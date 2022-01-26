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
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { StacksComponent } from './components/landing/home-components/stacks/stacks.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

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
    StacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CollapseModule,
    AngularTypewriterEffectModule,
    BsDropdownModule.forRoot(),
    ModalModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
