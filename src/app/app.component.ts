import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task1';
   show=false;
    onclick(){
    this.show=!this.show;
    console.log("onclick");
  }
}
