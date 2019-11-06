import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { ClientsComponent } from './clients/clients.component';
import { TestemonialComponent } from './testemonial/testemonial.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { NewProjectStartComponent } from './new-project-start/new-project-start.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderSliderAreaComponent } from './header-slider-area/header-slider-area.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ServiceComponent,
    ProjectComponent,
    TeamComponent,
    ContactComponent,
    BlogComponent,
    FooterComponent,
    PricingComponent,
    ClientsComponent,
    TestemonialComponent,
    StatisticsComponent,
    WhatWeDoComponent,
    NewProjectStartComponent,
    HeaderSliderAreaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
