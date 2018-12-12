import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KillersComponent } from './killers/killers.component';
import { MotivesComponent } from './motives/motives.component';
import { CountriesComponent } from './countries/countries.component';
import { KillerListComponent } from './killers/killer-list/killer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    KillersComponent,
    MotivesComponent,
    CountriesComponent,
    KillerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
