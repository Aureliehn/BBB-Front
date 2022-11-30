import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { HeaderComponent } from './Components/header/header.component';
import { DashboardResultComponent } from './Components/Dashboard/dashboard-result/dashboard-result.component';
import { DashboardUpcomingComponent } from './Components/Dashboard/dashboard-upcoming/dashboard-upcoming.component';
import { NavComponent } from './Components/Utils/nav/nav.component';
import { FooterComponent } from './Components/Utils/footer/footer.component';
import { ActuComponent } from './Components/actu/actu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClubPresComponent } from './Pages/club/club-pres/club-pres.component';
import { TechnicalTeamComponent } from './Components/club/technical-team/technical-team.component';
import { FunctionTeamComponent } from './Components/club/function-team/function-team.component';
import { PartnersComponent } from './Components/club/partners/partners.component';
import { TrainingComponent } from './Components/club/training/training.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    DashboardResultComponent,
    DashboardUpcomingComponent,
    NavComponent,
    FooterComponent,
    ActuComponent,
    ClubPresComponent,
    TechnicalTeamComponent,
    FunctionTeamComponent,
    PartnersComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
