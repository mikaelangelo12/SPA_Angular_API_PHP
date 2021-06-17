import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeriesRoutingModule } from './series-routing.module';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetalhesComponent } from './serie-detalhes/serie-detalhes.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SeriesRoutingModule,

  ],
  declarations: [
    SerieListComponent,
    SerieDetalhesComponent

  ]
})
export class SeriesModule {}
