// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../series.service';
import { Serie } from '../serie';


@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series$!: Observable<Serie[]>;
  selectedId = 0;

  constructor(
    private service: SeriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.series$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getSeries();
      })
    );
  }
}
