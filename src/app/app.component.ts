import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing-popup';
  popup = false;
  closePopover() {
    this.popup = false;
  }
  handleBackdropClick() {
    this.closePopover();
  }
}
