import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayGridPlugin from '@fullcalendar/daygrid'; // for dayGridMonth view

@Component({
  selector: 'app-demande-conges',
  templateUrl: './demande-conges.component.html',
  styleUrls: ['./demande-conges.component.css']
})
export class DemandeCongesComponent implements OnInit {
  calendarPlugins = [interactionPlugin, dayGridPlugin];
  constructor() { }

  ngOnInit() {
  }

}
