import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { GeneralComponent } from './components/general/general.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
 
   {path: 'info', component:InfoComponent},
    {path:'general',component:GeneralComponent},
    {path:'contact',component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingRouterModule { }