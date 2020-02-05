import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-demande-rtt',
  templateUrl: './demande-rtt.component.html',
  styleUrls: ['./demande-rtt.component.css']
})
export class DemandeRttComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];

  constructor() { }

  ngOnInit() {
  }

}
