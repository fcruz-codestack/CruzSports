export class IScoreboard {
  id = 0;
  date = '';
  time = '';
  lastUpdatedOn = '';
  scheduleStatus = '';
  delayedOrPostponedReason = '';
  originalDate = '';
  originalTime = '';
  homeTeamId = null;
  homeTeamName = '';
  homeTeamCity = '';
  homeTeamIcon = '';
  homeTeamAbbreviation = '';
  awayTeamId = null;
  awayTeamName = '';
  awayTeamCity = '';
  awayTeamIcon = '';
  awayTeamAbbreviation = '';
  location = '';
  awayScore = '';
  homeScore = '';
  isUnplayed = '';
  isInProgress = '';
  isCompleted = '';
  playStatus = '';
  gameSummary: IGameSummary[];
}

export interface IGameSummary {
  inningNumber: number;
  awayScore: number;
  homeScore: number;
}
