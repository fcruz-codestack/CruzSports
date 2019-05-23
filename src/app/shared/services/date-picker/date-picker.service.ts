import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatePickerService {
  dateFormat: string;
  initDate: Date;
  public dateValue: BehaviorSubject<string> = new BehaviorSubject<string>(this.dateFormat);

  constructor() {

    this.initDate = new Date();
    this.formatDate(this.initDate);
  }
  setDate(dateString: string) {
    // console.log('Date Picker setDate() SAYS:' + dateString);
    this.dateValue.next(dateString);
  }
  formatDate(dateValue: Date) {
    // console.log('DatePicker formatDate() SAYS : ' + dateValue);
    this.dateFormat = (dateValue.getFullYear()).toString();
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.dateFormat = this.dateFormat + months[(dateValue.getMonth())];
    const days = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14',
                  '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
                  '27', '28', '29', '30', '31'];
    this.dateFormat = this.dateFormat + days[dateValue.getDate()];
    // console.log('DatePicker formatDate() SAYS : dateFormat is', this.dateFormat);
  }
}
