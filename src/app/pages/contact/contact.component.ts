import { Component, EventEmitter, Output } from '@angular/core';

export interface contactType {
  email: string;
  fullName: string;
  subject: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class Contact {
  @Output() messageEvent = new EventEmitter<contactType>();
  contactPageInput: contactType = {
    email: '',
    fullName: '',
    subject: '',
    message: '',
  };
  send() {
    this.messageEvent.emit(this.contactPageInput);
  }
}
