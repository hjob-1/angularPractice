import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progressBar',
  templateUrl: './progressBar.component.html',
  styleUrls: ['./progressBar.component.css'],
})
export class ProgressBar {
  @Input() skill = '';
  @Input() percent = '';
}
