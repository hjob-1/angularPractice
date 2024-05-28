import { Component } from '@angular/core';
import { skills } from './skill.data';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class Skill {
  proffessionalskills: { skill: string; percent: string }[] = skills;
}
