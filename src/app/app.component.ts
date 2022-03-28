import { Component } from '@angular/core';
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
    {
      name: 'The Pentagon is sending six Navy planes and 240 troops to Germany.',
      author: 'Helene Cooper',
      time: 1648335537,
      text: `WASHINGTON — The Pentagon is sending six Navy attack planes and 240 troops to Germany, the latest Biden administration effort to warn President Vladimir Putin that the tough fight he is facing against Ukraine is nothing compared to the fight he would face should he strike a NATO country.

Defense officials said that the EA-18G Growlers — electronic warfare planes that pave the way for stealth attacks by jamming enemy air defenses — are not meant to be used against Russia in Ukraine.

“They are not being sent because of some sort of acute threat that was perceived or some specific incident that happened,” the Pentagon press secretary, John F. Kirby, told reporters during a news conference on Monday. But, he added that Defense Secretary Lloyd J. Austin III “wants to keep options open.”

The planes are the latest move in the administration’s steady escalation of troops and resources to Europe, as NATO and Russia edge closer to conflict than at any time since the military alliance was formed in 1949.

President Biden has maintained that he will not send American troops to fight Russia in Ukraine. But he has also said repeatedly that any Russian attack on a NATO member country would be seen as an attack on the alliance.

“These Growlers, as those of you who are familiar with the platform know, are equipped for a variety of missions, but they do specialize in flying electronic warfare missions, using a suite of jamming sensors to confuse enemy radars, greatly aiding the ability to conduct suppression of enemy air defense operations,” Mr. Kirby said.`
    },
  ];

  selected_article: Article | null = this.article_list[0]

  onArticleClick = (event: Article) => this.selected_article = event
}
