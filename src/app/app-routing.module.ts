import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './Components/club/training/training.component';
import { ClubPresComponent } from './Pages/club/club-pres/club-pres.component';
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
    // {
    //     path: 'edf',
    //     component: 
    // },
    // {
    //     path: 'jeune',
    //     component: 
    // },
    // {
    //     path: 'seniors',
    //     component: 
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(appRouteList)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule {
}