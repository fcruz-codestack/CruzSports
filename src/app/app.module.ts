import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ObserversModule } from '@angular/cdk/observers';
import { ScoreBoardComponent } from './shared/components/scoreBoard-dlySched/score-board/score-board/score-board/score-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    ObserversModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ScoreBoardComponent],
  entryComponents: [ScoreBoardComponent]
})
export class AppModule { }
