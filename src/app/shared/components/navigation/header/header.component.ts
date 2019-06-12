import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatePickerService } from 'src/app/shared/services/date-picker/date-picker.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // events: string[] = [];
  @Output() public sidenavToggle = new EventEmitter();
  contentSubscriptions: Subscription = new Subscription();
  dateValue = new Date();
  dateFormat: string;

  constructor(private dateService: DatePickerService) {
   }
  ngOnInit() {
    this.dateValue = new Date();
    console.log('Header-Component ngOnInit() Says ->> ', this.dateValue);
    this.formatDate(this.dateValue);
  }
  inputEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // console.log('This is ADD-EVENT()', `${event.target}`);
    // const dateChange = new Date(Date.parse(`${event.value}`));
    // this.formatDate(dateChange);
    // this.events.push(`${type}: ${event.value}`);
  }
  changeEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('This is ADD-EVENT()', `${event.target}`);
    const dateChange = new Date(Date.parse(`${event.value}`));
    this.formatDate(dateChange);
    // this.events.push(`${type}: ${event.value}`);
  }
  private formatDate(dateValue: Date) {
    console.log('Nav-Header formatDate() SAYS : ' + dateValue);
    this.dateFormat = (dateValue.getFullYear()).toString();
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    console.log('Nav-Header formatDate() SAYS dateValue.getMonth() is: ' + dateValue.getMonth());
    this.dateFormat = this.dateFormat + months[(dateValue.getMonth())];
    const days = ['0', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14',
                  '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
                  '27', '28', '29', '30', '31'];
    this.dateFormat = this.dateFormat + days[dateValue.getDate()];
    console.log('Nav-Header formatDate() SAYS dateFormat is: ' + this.dateFormat);
    const dateSubscription = this.dateService.setDate(this.dateFormat);
    this.contentSubscriptions.add(dateSubscription);
  }

  ngOnDestroy() {
    this.contentSubscriptions.unsubscribe();
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
