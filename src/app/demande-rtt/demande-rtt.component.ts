import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import frLocale from '@fullcalendar/core/locales/fr';

@Component({
  selector: 'app-demande-rtt',
  templateUrl: './demande-rtt.component.html',
  styleUrls: ['./demande-rtt.component.css']
})
export class DemandeRttComponent implements OnInit {
  calendarPlugins = [interactionPlugin, dayGridPlugin];
  local = [frLocale];

  constructor() { }

  ngOnInit() {
  }

}
