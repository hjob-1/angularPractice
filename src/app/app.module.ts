import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar } from './components/navbar/navbar.component';
import { Button } from './components/button/button.component';
import { Icon } from './components/icon/icon.component';
import { Card } from './components/card/card.component';
import { InputField } from './components/input/input.component';
import { Banner } from './components/banner/banner.component';
import { Layout } from './layout/layout.component';
import { WorkExperience } from './pages/workExperience/work.component';
import { About } from './pages/about/about.component';
import { Footer } from './components/footer/footer.component';
import { Skill } from './pages/skills/skill.component';
import { ProgressBar } from './components/progressBar/progressBar.component';
import { Education } from './pages/education/education.component';
import { Project } from './pages/projects/project.component';
import { Contact } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    Button,
    Icon,
    Card,
    InputField,
    Banner,
    Layout,
    WorkExperience,
    About,
    Footer,
    Skill,
    ProgressBar,
    Education,
    Project,
    Contact,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
