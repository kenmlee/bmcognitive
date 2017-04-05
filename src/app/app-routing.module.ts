import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvConfigComponent } from './env-config/env-config.component';
import { TokenComponent } from './token/token.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/config'
      },
      {
        path: 'config',
        component: EnvConfigComponent
      },
      {
        path: 'token',
        component: TokenComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
