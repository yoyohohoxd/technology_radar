import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TechnologyRadarComponent } from './technology-radar/technology-radar.component';

const routes: Routes = [
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'technology-radar', component: TechnologyRadarComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: TechnologyDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }