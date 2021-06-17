import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-serie-detalhes',
  templateUrl: './serie-detalhes.component.html',
  styleUrls: ['./serie-detalhes.component.css']
})

export class SerieDetalhesComponent implements OnInit {
    serie$!: Observable<Serie>;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: SeriesService
    ) {}


    ngOnInit() {
        this.serie$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
        this.service.getSerie(params.get('id')!))

      );
    }

    gotoSeries(serie: Serie) {
      const serieId = serie ? serie.desc : null;

      this.router.navigate(['/superseries', { id: serieId, foo: 'foo' }]);
    }
  }



