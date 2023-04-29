import { Component,HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../shared/services/snackbar.service';

@Component({
  selector: 'app-practiceflex',
  templateUrl: './practiceflex.component.html',
  styleUrls: ['./practiceflex.component.scss']
})
export class PracticeflexComponent {
//   isSmallScreen: boolean | undefined;
//   isLargeScreen: boolean | undefined;

//   constructor() {
//     this.onResize();
//   }

//   @HostListener('window:resize', ['$event'])
//   onResize() {
//     this.isSmallScreen = window.innerWidth < 768;
//     this.isLargeScreen = window.innerWidth >= 768;
// }
longText = `I'm impressed with the results I've seen since
starting to use this product, I begin receiving
clients and projects in the first week.`;
imageSrc = '';
  messageText = '';
  imageButtons = [ {src:'../assets/person1.jpeg', name: 'image-1'}, {src:'../assets/quotes.png', name: 'image-2'}, 
  {src:'../assets/person1.jpeg', name: 'image-3'}]

  ngOnInit() {
  }
  onClick(imageNameObject: { src: string; name: string; }) {
    this.imageSrc = imageNameObject.src;
    this.messageText = imageNameObject.name;
  }
  imagepath1="../assets/quotes.png";
onchange(){
 {{this.imagepath1}}
}
constructor(private _snackBar: MatSnackBar,
  private snackbarservice:SnackbarService) {}

openSnackBar() {
  this.snackbarservice.openSnackbar('blue','info! Error','cancel');
}
}
