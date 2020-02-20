import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayGridPlugin from '@fullcalendar/daygrid'; // for dayGridMonth view
import frLocale from '@fullcalendar/core/locales/fr';

@Component({
  selector: 'app-demande-conges',
  templateUrl: './demande-conges.component.html',
  styleUrls: ['./demande-conges.component.css']
})
export class DemandeCongesComponent implements OnInit {
  calendarPlugins = [interactionPlugin, dayGridPlugin];
  local = [frLocale];

  constructor() { }

  ngOnInit() {
  }


}
