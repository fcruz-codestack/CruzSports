import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ScoreBoardComponent } from '../views/score-board/score-board.component';
import { TeamsComponent } from '../views/teams/teams.component';
import { FullScheduleComponent } from '../views/full-schedule/full-schedule.component';
import { StandingsComponent } from '../views/standings/standings.component';
import { PageNotFoundComponent } from '../views/page-not-found/page-not-found.component';


const routes: Routes = [
{
  path: 'Home',
  component: ScoreBoardComponent
},
{
  path: 'Teams',
  component: TeamsComponent
},
{ path: 'Full-Schedule',
  component: FullScheduleComponent
},
{
  path: 'Standings',
  component: StandingsComponent,
},
{ path: '',
  redirectTo: 'Home',
  pathMatch: 'full'
},
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
