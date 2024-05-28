import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkExperience {
  workExperience = [
    {
      date: 'March 2016 - Present',
      companyName: 'CREATIVEM',
      role: 'Front End Devloper',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos vel blanditiis officia quis! Atque reprehenderit, quia ducimus suscipit dolores enim illum delectus incidunt quo optio. Quos nesciunt numquam sint labore. Quos aspernatur fugiat id blanditiis recusandae, sequi dolorum qui, voluptas at nam totam facere consectetur delectus eius minus consequuntur dolorem eveniet nostrum? Beatae necessitatibus aut libero expedita optio velit voluptates!',
    },
    {
      date: 'March 2014 - May 2016',
      companyName: 'WEBNOTE',
      role: 'Web Devloper',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos vel blanditiis officia quis! Atque reprehenderit, quia ducimus suscipit dolores enim illum delectus incidunt quo optio. Quos nesciunt numquam sint labore. Quos aspernatur fugiat id blanditiis recusandae, sequi dolorum qui, voluptas at nam totam facere consectetur delectus eius minus consequuntur dolorem eveniet nostrum? Beatae necessitatibus aut libero expedita optio velit voluptates!',
    },
    {
      date: 'April 2013 - June 2014',
      companyName: 'WEBM',
      role: 'Intern',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos vel blanditiis officia quis! Atque reprehenderit, quia ducimus suscipit dolores enim illum delectus incidunt quo optio. Quos nesciunt numquam sint labore. Quos aspernatur fugiat id blanditiis recusandae, sequi dolorum qui, voluptas at nam totam facere consectetur delectus eius minus consequuntur dolorem eveniet nostrum? Beatae necessitatibus aut libero expedita optio velit voluptates!',
    },
  ];
}
