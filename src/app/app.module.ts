import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { DemandeCongesComponent } from './demande-conges/demande-conges.component';
import { DemandeRttComponent } from './demande-rtt/demande-rtt.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './services/auth-guard.service';
import {FullCalendarModule} from '@fullcalendar/angular';

const appRoutes: Routes = [
  { path: 'conges', canActivate: [AuthGuard], component: DemandeCongesComponent },
  { path: 'rtt', canActivate: [AuthGuard], component: DemandeRttComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    DemandeCongesComponent,
    DemandeRttComponent,
    HeaderComponent,
    AuthComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FullCalendarModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
