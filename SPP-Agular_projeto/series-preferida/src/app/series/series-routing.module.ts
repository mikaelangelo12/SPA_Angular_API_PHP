import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetalhesComponent } from './serie-detalhes/serie-detalhes.component';

const seriesRoutes: Routes = [
  { path: 'Series', redirectTo: '/superseries' },
  { path: 'serie/:id', redirectTo: '/superserie/:id' },
  { path: 'superseries',  component: SerieListComponent, data: { animation: 'Series' } },
  { path: 'superserie/:id', component: SerieDetalhesComponent, data: { animation: 'Serie' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(seriesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SeriesRoutingModule { }

