import { Component } from '@angular/core';
import { Headline } from 'src/app/headline/headline.component'
import { Article } from 'src/app/article/article.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  article_list: Array<Article> = [
    {
      name: 'Russian convoy stalled near Kyiv has moved into the woods, Pentagon says.',
      author: 'Eric Schmitt',
      time: 1647281076,
      text: 'yeah there is definitely a whole article here'
    },
    {
      name: 'British American Tobacco says it is exiting its Russian business.',
      author: 'Eshe Nelson',
      time: 1647280076,
      text: 'yeah there is definitely a whole article here'
    },
    {
      name: '‘There is a price to pay for democracy.’ Harris says the U.S. must bear higher gas prices to punish Russia.',
      author: 'Zolan Kanno-Youngs and Matthew Mpoke Bigg',
      time: 1647271076,
      text: 'yeah there is definitely a whole article here'
    },
  ];
  
}
