import { Component, Input, OnInit } from '@angular/core';

interface Headline {
  name: string
  author: string
  time: number
}

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  @Input()
  headline: Headline

  get TimeAgo() {
    if (this.headline.time) {
      return Date.now() - this.headline.time
    }
  }

  ngOnInit(): void {
  }

}
