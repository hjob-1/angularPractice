import { Component } from '@angular/core';
import { educations } from './education.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class Education {
  listOfEducations: {
    date: string;
    schoolName: string;
    role: string;
    description: string;
  }[] = educations;
}
