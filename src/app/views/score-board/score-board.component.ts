import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  IScoreboard,
  IGameSummary
} from 'src/app/shared/models/utils/interfaces';
import { Subscription } from 'rxjs';
import { MlbIconService } from 'src/app/shared/services/mlb-icon/mlb-icon.service';
import { DatePickerService } from 'src/app/shared/services/date-picker/date-picker.service';
import { DataApiService } from 'src/app/shared/services/data-api/data-api.service';

@Component({
  selector: 'cs-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit, OnDestroy {
  gamesArray: IScoreboard[] = [];
  gameInnings: IGameSummary[] = [];
  private baseUrl = 'https://api.mysportsfeeds.com/v1.1/pull/mlb/2019-regular/';
  private scoreboardUrl = 'scoreboard.json?fordate=';
  private dailyGameScheduleUrl = 'daily_game_schedule.json?fordate=';
  homeSrc: string;
  awaySrc: string;
  selectedDate: string;
  feedUrl: string;

  contentSubscriptions: Subscription = new Subscription();
  constructor(
    private dataService: DataApiService,
    private mlbIconService: MlbIconService,
    private dateService: DatePickerService
  ) {}

  ngOnInit() {
    this.gamesArray = [];
    this.gameInnings = [];
    const dateSubscription = this.dateService.dateValue.subscribe(date => {
      this.selectedDate = date;
      console.log(
        'ScoreBoard ngOnInit() SAYS selectedDate is ->',
        this.selectedDate
      );
      this.gamesArray = [];
      this.compareDates();
      this.loadData();
    });
    this.contentSubscriptions.add(dateSubscription);
    this.compareDates();
  }
  ngOnDestroy() {
    this.contentSubscriptions.unsubscribe();
  }
  loadData() {
    let url = '';
    this.gamesArray = [];
    this.gameInnings = [];
    switch (this.feedUrl) {
      case 'daily_game_schedule':
        url = this.baseUrl + this.dailyGameScheduleUrl + this.selectedDate;
        const dailySchedSubscription = this.dataService
          .getFeed(url)
          .subscribe(x => {
            console.log('loadData() SAYS: this is x -> ', x);
            for (const schedule of x.dailygameschedule.gameentry) {
              this.homeSrc = this.mlbIconService.getIcon(
                schedule.homeTeam.Abbreviation
              );
              this.awaySrc = this.mlbIconService.getIcon(
                schedule.awayTeam.Abbreviation
              );
              const nfo: IScoreboard = {
                id: schedule.id,
                date: schedule.date,
                time: schedule.time,
                lastUpdatedOn: x.dailygameschedule.lastUpdatedOn,
                scheduleStatus: schedule.scheduleStatus,
                delayedOrPostponedReason: schedule.delayedOrPostponedReason,
                originalDate: schedule.originalDate,
                originalTime: schedule.originalTime,
                homeTeamId: schedule.homeTeam.ID,
                homeTeamName: schedule.homeTeam.Name,
                homeTeamCity: schedule.homeTeam.City,
                homeTeamIcon: this.homeSrc,
                homeTeamAbbreviation: schedule.homeTeam.Abbreviation,
                awayTeamId: schedule.awayTeam.ID,
                awayTeamName: schedule.awayTeam.Name,
                awayTeamCity: schedule.homeTeam.City,
                awayTeamIcon: this.awaySrc,
                awayTeamAbbreviation: schedule.awayTeam.Abbreviation,
                location: schedule.location,
                awayScore: null,
                homeScore: null,
                isUnplayed: null,
                isInProgress: null,
                isCompleted: null,
                playStatus: null,
                gameSummary: []
              };
              this.gamesArray.push(nfo);
            }
          });
        this.contentSubscriptions.add(dailySchedSubscription);
        break;
      case 'scoreboard':
        url = this.baseUrl + this.scoreboardUrl + this.selectedDate;
        const scoreBoardSubscription = this.dataService
          .getFeed(url)
          .subscribe(x => {
            console.log('loadData() SAYS: this is x -> ', x);
            for (const gameScore of x.scoreboard.gameScore) {
              this.homeSrc = this.mlbIconService.getIcon(
                gameScore.game.homeTeam.Abbreviation
              );
              this.awaySrc = this.mlbIconService.getIcon(
                gameScore.game.awayTeam.Abbreviation
              );
              // console.log ('This is the gameScore inningSummary ==> ', gameScore.inningSummary.inning);
              this.gameInnings = [];
              for (const i of gameScore.inningSummary.inning ) {
                // console.log('This i[@number] #####--->>> ', i['@number']);
                // console.log('This i.awayScore #####--->>> ', i.awayScore);
                // console.log('This i.homeScore #####--->>> ', i.homeScore);
                const inningInfo: IGameSummary = {
                  inningNumber: i['@number'],
                  awayScore: i.awayScore,
                  homeScore: i.homeScore
                };
                this.gameInnings.push(inningInfo);
              }
              console.log('This is gameInnings[]--->>> ', this.gameInnings);
              const nfo: IScoreboard = {
                id: gameScore.game.ID,
                date: gameScore.game.date,
                time: gameScore.game.time,
                lastUpdatedOn: x.scoreboard.lastUpdatedOn,
                scheduleStatus: gameScore.game.scheduleStatus,
                delayedOrPostponedReason:
                  gameScore.game.delayedOrPostponedReason,
                originalDate: gameScore.game.originalDate,
                originalTime: gameScore.game.originalTime,
                homeTeamId: gameScore.game.homeTeam.ID,
                homeTeamName: gameScore.game.homeTeam.Name,
                homeTeamCity: gameScore.game.homeTeam.City,
                homeTeamIcon: this.homeSrc,
                homeTeamAbbreviation: gameScore.game.homeTeam.Abbreviation,
                awayTeamId: gameScore.game.awayTeam.ID,
                awayTeamName: gameScore.game.awayTeam.Name,
                awayTeamCity: gameScore.game.awayTeam.City,
                awayTeamIcon: this.awaySrc,
                awayTeamAbbreviation: gameScore.game.awayTeam.Abbreviation,
                location: gameScore.game.location,
                awayScore: gameScore.awayScore,
                homeScore: gameScore.homeScore,
                isUnplayed: gameScore.isUnplayed,
                isInProgress: gameScore.isInProgress,
                isCompleted: gameScore.isCompleted,
                playStatus: gameScore.playStatus,
                gameSummary: this.gameInnings
              };
              this.gamesArray.push(nfo);
            }
          });
        this.contentSubscriptions.add(scoreBoardSubscription);
        break;
      default:
        break;
    }
    console.log('loadData SAYS: this is gamesArray -> ', this.gamesArray);
  }
  compareDates() {
    // tslint:disable-next-line: radix
    const selDay = parseInt(this.selectedDate.substr(6, 2));
    // tslint:disable-next-line: radix
    const selMonth = parseInt(this.selectedDate.substr(4, 2)) - 1;
    // tslint:disable-next-line: radix
    const selYear = parseInt(this.selectedDate.substr(0, 4));
    const selDate = new Date(selYear, selMonth, selDay);
    const todaysDate = new Date();
    console.log('compareDatesFormat() Says selDate is -> ' + selDate);
    console.log('compareDatesFormat() Says todaysDate is -> ' + todaysDate);
    const diff = Math.abs(selDate.getTime() - todaysDate.getTime()) / 3600000;
    console.log('The Diff IS ' + diff + ' HOURS');
    if (diff <= 24) {
      // console.log('The winner is -> daily_game_schedule = ');
      this.feedUrl = 'daily_game_schedule';
    } else {
      // console.log('The winner is -> scoreboard');
      this.feedUrl = 'scoreboard';
    }
  }
}
