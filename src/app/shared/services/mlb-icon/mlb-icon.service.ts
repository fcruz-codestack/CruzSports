import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MlbIconService {

  constructor() { }
  getIcon(teamName: string) {
    let icon = '';
    switch (teamName) {
      case 'ARI':
        icon = 'assets/img/mlb/ARI.jpg';
        break;
      case 'ATL':
        icon = 'assets/img/mlb/ATL.jpg';
        break;
      case 'BAL':
        icon = 'assets/img/mlb/BAL.jpg';
        break;
      case 'BOS':
        icon = 'assets/img/mlb/BOS.jpg';
        break;
      case 'CHC':
        icon = 'assets/img/mlb/CHC.jpg';
        break;
      case 'CIN':
        icon = 'assets/img/mlb/CIN.png';
        break;
      case 'CLE':
        icon = 'assets/img/mlb/CLE.png';
        break;
      case 'COL':
        icon = 'assets/img/mlb/COL.jpg';
        break;
      case 'CWS':
        icon = 'assets/img/mlb/CWS.png';
        break;
      case 'DET':
        icon = 'assets/img/mlb/DET.png';
        break;
      case 'HOU':
        icon = 'assets/img/mlb/HOU.jpg';
        break;
      case 'KC':
        icon = 'assets/img/mlb/KC.png';
        break;
      case 'LAA':
        icon = 'assets/img/mlb/LAA.png';
        break;
      case 'LAD':
        icon = 'assets/img/mlb/LAD.jpg';
        break;
      case 'MIA':
        icon = 'assets/img/mlb/MIA.jpg';
        break;
      case 'MIL':
        icon = 'assets/img/mlb/MIL.jpg';
        break;
      case 'MIN':
        icon = 'assets/img/mlb/MIN.jpg';
        break;
      case 'NYM':
        icon = 'assets/img/mlb/NYM.jpg';
        break;
        case 'NYY':
          icon = 'assets/img/mlb/NYY.png';
          break;
      case 'OAK':
        icon = 'assets/img/mlb/OAK.jpg';
        break;
      case 'PHI':
        icon = 'assets/img/mlb/PHI.jpg';
        break;
      case 'PIT':
        icon = 'assets/img/mlb/PIT.jpg';
        break;
      case 'SD':
        icon = 'assets/img/mlb/SD.jpg';
        break;
      case 'SEA':
        icon = 'assets/img/mlb/SEA.jpg';
        break;
      case 'SF':
        icon = 'assets/img/mlb/SF.jpg';
        break;
      case 'STL':
        icon = 'assets/img/mlb/STL.jpg';
        break;
      case 'TB':
        icon = 'assets/img/mlb/TB.png';
        break;
      case 'TEX':
        icon = 'assets/img/mlb/TEX.jpg';
        break;
      case 'TOR':
        icon = 'assets/img/mlb/TOR.jpg';
        break;
      case 'WAS':
        icon = 'assets/img/mlb/WAS.jpg';
        break;
      default:
        break;
    }
    return icon;
  }
}
