import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrearComponent } from './pages/crear/crear.component';
import { VerComponent } from './pages/ver/ver.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

import { CardRutineComponent } from './components/card-rutine/card-rutine.component';
import { CardExercieComponent } from './components/card-exercie/card-exercie.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CrearComponent,
    VerComponent,
    NavbarComponent,
    CardRutineComponent,
    CardExercieComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
