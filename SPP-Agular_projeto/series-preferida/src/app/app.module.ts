
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SeriesModule } from './series/series.module';


@NgModule({
   imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    SeriesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
