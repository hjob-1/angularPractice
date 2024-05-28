import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class Contact {
  contactPageInput = {
    email: '',
    fullName: '',
    subject: '',
    message: '',
  };
  send() {
    console.log('message', this.contactPageInput);
  }
}
