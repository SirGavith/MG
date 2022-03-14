import { Component } from '@angular/core';
import { Headline } from 'src/app/headline/headline.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  headline_list: Array<Headline> = [
    {
      name: 'Russian convoy stalled near Kyiv has moved into the woods, Pentagon says.',
      author: 'Eric Schmitt',
      time: 1647023748
    },
    {
      name: 'British American Tobacco says it is exiting its Russian business.',
      author: 'Eshe Nelson',
      time: 1647021748
    },
    {
      name: '‘There is a price to pay for democracy.’ Harris says the U.S. must bear higher gas prices to punish Russia.',
      author: 'Zolan Kanno-Youngs and Matthew Mpoke Bigg',
      time: 1647018748
    },
  ];
}
