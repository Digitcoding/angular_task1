import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar:MatSnackBar) { }
  openSnackbar(text: string, message: string,_second:string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 4000,
      panelClass: [text],
      data: {
        Message: message,
        action: _second
      },
    });
  }
}
