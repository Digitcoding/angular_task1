import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './loading/components/info/info.component';
import { PracticeflexComponent } from './practiceflex/practiceflex.component';
import { GeneralComponent } from './loading/components/general/general.component';
import { SignupComponent } from './signup/signup.component';
import { CustomPreloadingStrategyService } from './shared/services/custom-preloading-strategy-service.service';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'app', component: SignupComponent, children: [//navbar
      {
        path: 'practice', component: PracticeflexComponent, children: [//info
          //infochildren
          {
            path: 'settings', data: { preload:false, loadAfterSeconds: 5 },
            loadChildren: () => import('./loading/loading.module').then(m => m.LoadingModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
