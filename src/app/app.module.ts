import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { LayoutComponent } from './shared/layout/layout/layout.component';
import { ScoreBoardComponent } from './views/score-board/score-board.component';
import { FullScheduleComponent } from './views/full-schedule/full-schedule.component';
import { TeamsComponent } from './views/teams/teams.component';
import { StandingsComponent } from './views/standings/standings.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/components/navigation/header/header.component';
import { SidenavListComponent } from './shared/components/navigation/sidenav-list/sidenav-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TeamsComponent,
    StandingsComponent,
    FullScheduleComponent,
    ScoreBoardComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ObserversModule,
    MaterialModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
