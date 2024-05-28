import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class Card {
  @Input() date = '';
  @Input() role = '';
  @Input() companyName = '';
  @Input() description = '';
}
