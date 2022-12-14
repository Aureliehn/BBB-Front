import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './Components/club/training/training.component';
import { PartnersComponent } from './Components/partners/partners.component';
import { SectionComponent } from './Components/section/section.component';
import { ClubPresComponent } from './Pages/club/club-pres/club-pres.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { LandingComponent } from './Pages/landing/landing.component';

export const appRouteList: Routes = [
    { path: '', pathMatch:'full', redirectTo:'accueil'},
    {
        path: 'accueil',
        component: LandingComponent
    },
    {
        path: 'club/presentation',
        component: ClubPresComponent
    },
    {
        path: 'club/training',
        component: TrainingComponent
    }
    ,
    {
        path: `section/:id`,
        component: SectionComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'partenaires',
        component: PartnersComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRouteList)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule {
}