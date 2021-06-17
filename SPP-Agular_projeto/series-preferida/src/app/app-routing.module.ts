import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [

  { path: '',   redirectTo: '/superseries', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/