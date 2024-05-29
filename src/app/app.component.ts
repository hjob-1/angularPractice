import { Component } from '@angular/core';
import { contactType } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  receivedMessage: contactType = {
    email: '',
    fullName: '',
    subject: '',
    message: '',
  };

  receiveMessage(message: contactType) {
    this.receivedMessage = message;
    console.log(
      'data sent from child to parent component',
      this.receivedMessage
    );
  }
}
