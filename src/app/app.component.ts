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
      text: `British American Tobacco said on Friday that it was exiting its Russian business, just two days after it had said it planned to continue operations but end capital investments.

      The company, whose products include Lucky Strike, Pall Mall and Dunhill cigarettes, said it had begun a process “to rapidly transfer” its Russian business. It said it would continue to pay its 2,500 employees in the country for now, but once the transfer is complete, it will “no longer have a presence in Russia,” it said.
      
      “We have concluded that BAT’s ownership of the business in Russia is no longer sustainable in the current environment,” the company, which is based in London, said in a statement on Friday.
      
      The decision follows a slew of announcements by American and European companies, including banks, retailers and fast food restaurants, that they will suspend or end their operations in Russia in response to the war in Ukraine and the economic sanctions imposed by the West. Companies that initially intended to continue their business in Russia have faced increasing public pressure, which has led to some U-turns, including by the parent company of the Japanese clothes retailer Uniqlo.
      
      British American Tobacco had said on Wednesday that it had suspended all operations and manufacturing in Ukraine, where it employs more than 1,000 people, and that operations in Russia were continuing but planned capital investments had been suspended.`
    },
    {
      name: '‘There is a price to pay for democracy.’ Harris says the U.S. must bear higher gas prices to punish Russia.',
      author: 'Zolan Kanno-Youngs and Matthew Mpoke Bigg',
      time: 1647271076,
      text: `BUCHAREST — Vice President Kamala Harris said Friday that Americans will have to bear the burden of higher gas prices, but insisted that it was a cost worth paying to punish Russia for waging war on Ukraine.

      She spoke on the second day of a high-stakes diplomatic trip through Poland and Romania that was meant to reassure the two NATO allies that border Ukraine.
      
      “There is a price to pay for democracy. You got to stand with your friends,” Ms. Harris said during a joint news conference with President Klaus Iohannis of Romania. “Sometimes it is difficult. Often, it ain’t easy.”
      
      The White House had already warned Americans that U.S. and Europeans sanctions on Russian oil and energy would have an impact on gas prices in the United States, a message that the vice president echoed during her trip overseas.`
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
