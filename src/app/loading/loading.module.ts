import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { GeneralComponent } from './components/general/general.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoadingRouterModule } from './loading.router';



@NgModule({
  declarations: [
    InfoComponent,
    GeneralComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
   LoadingRouterModule
    
  ]
})
export class LoadingModule { }
