import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IScoreboard } from '../../models/utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SingleScoreboardService {
  teamGameBoard: IScoreboard[] = [];
  gID = null;
  public gameScoreB: BehaviorSubject<IScoreboard[]> = new BehaviorSubject<IScoreboard[]>(this.teamGameBoard);

  public gameID: BehaviorSubject<number> = new BehaviorSubject<number>(this.gID);
  constructor() { }
  setGameScore(gameScore: IScoreboard[]) {
    this.gameScoreB.next(gameScore);
  }
  setGameID(id: number) {
    this.gameID.next(id);
  }
}
