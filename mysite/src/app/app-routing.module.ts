import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
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
import { HeaderSliderAreaComponent } from './header-slider-area/header-slider-area.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent},
  { path: 'Service', component: ServiceComponent},
  { path: 'Project', component: ProjectComponent},
  { path: 'Team', component: TeamComponent},
  { path: 'Blog', component: BlogComponent},
  { path: 'Contact', component: ContactComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
