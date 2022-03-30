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
    {
      name: 'A Russian negotiator’s positive language clashes with the hard-line rhetoric from Moscow.',
      author: 'Anton Troianovski',
      time: 1648453578,
      text: `ISTANBUL — Russia’s lead negotiator said on Wednesday that peace talks with Ukraine appeared to be on the verge of a breakthrough, even as other officials voiced skepticism and pro-Kremlin commentators heaped scorn on the talks — mixed messages that underscored the lack of clarity over President Vladimir V. Putin’s goals in the invasion and the uncertainty over whether progress in the talks was real.

The Kremlin’s chief negotiator, Vladimir Medinsky, read a statement broadcast on state television that described Ukraine’s proposal on Tuesday to declare neutrality as a core concession to Russia, just hours after the Kremlin’s spokesman, Dmitri S. Peskov, said that the talks in Istanbul had produced nothing “very promising.”

In the broadcast, Mr. Medinsky said, “Yesterday, the Ukrainian side for the first time outlined its readiness, in writing, to fulfill a number of important conditions for building normal and, I hope, good neighborly relations with Russia.”  

He listed a series of concessions, like refusing to host foreign troops, that he said Ukraine was prepared to make. “If these conditions are fulfilled, then the threat of a NATO bridgehead being created on Ukrainian territory will be liquidated,” Mr. Medinsky said.

He said Russia was determined to keep negotiating, and Mykhailo Podolyak, a member of Ukraine’s delegation in Istanbul, said the talks had yielded “proof of the viability of Ukrainian statehood.”

“The revision of global security principles & the role of institutions begins,” Mr. Podolyak said on Twitter.

The positive language from the negotiators clashed markedly with hard-line rhetoric coming out of Moscow, where supporters of the war decried Mr. Medinsky’s diplomacy as bordering on traitorous.

“Any talks with Nazis before your boot is on their throat are perceived as weakness,” Vladimir Solovyov, a popular state television host, said on his YouTube show, reprising the Kremlin’s false characterization of the Ukrainian government as “Nazis.” “You cannot meet with them or talk to them.”

And Mr. Peskov, the Kremlin’s spokesman, was far more cautious than Mr. Medinsky in his comments earlier Wednesday. He said that Ukraine’s willingness to put some proposals in writing was a “positive factor,” but that there was little progress to report otherwise.

“We do not see anything very promising or any breakthroughs,” Mr. Peskov told reporters. “Very, very long work is ahead.”

Some Russian analysts and Western officials see the diplomacy as little more than a way to buy time while Russian troops regroup. Russia’s promise to wind down military operations around Kyiv, which the Russian Defense Ministry cast as a good-faith gesture of de-escalation, in reality appeared to be a way to explain away a battlefield defeat.

Russia forces around Kyiv were “regrouping,” the Defense Ministry said on Wednesday, although that assertion could not be independently confirmed. The aim of gathering forces near Kyiv was all along not to take the city, but to tie up and weaken Ukrainian troops in the area, the ministry claimed in a statement.

“All these goals were achieved,” the ministry said, adding it would now focus on “the final stage of the operation to liberate” the Donbas area of eastern Ukraine.

Mr. Putin himself has not commented on what the Kremlin calls a “special military operation” in Ukraine since March 18. Tatiana Stanovaya, founder of the France-based political analysis firm R. Politik, noted that much of what Ukraine proposed on Tuesday would be a nonstarter for Mr. Putin, such as the idea that there would be a 15-year negotiating process about the status of Crimea — something that Mr. Putin, who annexed the Ukrainian peninsula in 2014, says is nonnegotiable.

She described the negotiations as, most likely, a feint rather than a signal that Russia was ready to wind down the war. But she noted that — as was the case in the run-up to the invasion — senior Russian officials were unlikely to know what Mr. Putin was really planning, leading to this week’s mixed messages.

“The problem with the Russian regime is that, once again, no one understands what Putin wants,” Ms. Stanovaya said. “As a result, we get this informational chaos.”`
    },
    {
      name: 'Serbia, bound by a sense of grievance against the West, sticks with Russia.',
      author: 'Andrew Higgins',
      time: 1648453678,
      text: `BELGRADE, Serbia — Mindful of the angry and still-unhealed wounds left by NATO’s bombing of Serbia more than 20 years ago, Ukraine’s ambassador appeared on Serbian television after Russia invaded and bombed his country in the hope of rousing sympathy.`
    },
    {
      name: 'German authorities are warning arriving refugees to watch out for thieves.',
      author: 'Christopher F. Schuetze',
      time: 1648453878,
      text: `BERLIN — Ukrainians fleeing war in their homeland remain vulnerable when arriving in Germany, the authorities in Berlin have warned, saying that thieves have been targeting the refugees — mostly women and children — at Berlin’s main train station and bus depot.`
    }
  ];

  selected_article: Article | null = this.article_list[0]

  onArticleClick = (event: Article) => this.selected_article = event
}
